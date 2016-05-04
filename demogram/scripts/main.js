/**
 * Created by rahul on 5/3/16.
 */

let React = require('react-native');
let { View, Text, TouchableOpacity, ScrollView, Image } = React;
let NavigationBar = require('react-native-navbar');
let RNInstagramOAuth = require('react-native-instagram-oauth');
let Detail = require('./detail');
let _ = require('lodash');

var instagram = {
    client_id: 'f1a5a69595d04d128197fe3e33cfa8fa',
    redirect_url: 'demogram://init'  // e.g.: 'test://init'
};


let Main = React.createClass({

    getInitialState: function() {
        return {
            data: null,
            loaded: false
        }
    },

    navigationBar: function() {
        let title = <Text>Demogram</Text>;
        return (
            <NavigationBar
                tintColor={'#f8f8f8'}
                title={ title } />
        );
    },

    render: function() {
        let { loaded } = this.state;
        let view = (
            loaded ?
                <ScrollView>{ this.getSubviews() }</ScrollView> :
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={ this.login }>
                        <Text>Login</Text>
                    </TouchableOpacity>
                </View>
        );
        return (
            <View style={{ flex: 1 }}>
                { this.navigationBar() }
                { view }
            </View>
        )
    },

    getSubviews: function() {
        return (
            _.map(this.state.data, (item) => {
                return (
                    <TouchableOpacity key={ item.id } onPress={ () => this.imagePressed(item) } style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Image style={{ height: 200, width: 200 }} source={{ uri: item.images.standard_resolution.url }} />
                    </TouchableOpacity>
                )
            })
        );
    },

    imagePressed: function(item) {
        let { navigator } = this.props;
        navigator && navigator.push({
            component: <Detail item={ item }/>
        });
    },

    login: function() {
        RNInstagramOAuth(instagram.client_id, instagram.redirect_url, (err, access_token) => {
                if (err) {
                    console.log(err)
                }
                if (access_token !== undefined) {
                    console.log(access_token);
                    this.fetchData(access_token);
                }
            }
        );
    },

    fetchData: function(accessToken) {
        fetch(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${accessToken}`)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    data: responseData.data,
                    loaded: true
                });
            })
            .done();
    }

});

module.exports = Main;