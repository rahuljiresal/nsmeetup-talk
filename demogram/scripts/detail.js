/**
 * Created by rahul on 5/3/16.
 */


'use strict';

let NavigationBar = require('react-native-navbar');
let NavBarButton = require('react-native-rj-navigator').NavBarButton;
let React = require('react-native');

var { Text, TextInput, View, StyleSheet } = React;

var Detail = React.createClass({

    getInitialState: function() {
        return {
            text: ''
        }
    },

    navigationBarLeftButton: function() {
        return (
            <NavBarButton
                side={'left'}
                text={ 'Back' }
                onPress={() => { this.props.navigator.pop(); }}
            />
        );
    },


    navigationBar: function() {
        let title = <Text>Detail</Text>;
        return (
            <NavigationBar
                tintColor={'#f8f8f8'}
                title={ title }
                leftButton={ this.navigationBarLeftButton() }/>
        );
    },

    render: function() {
        let { item } = this.props;
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                { this.navigationBar() }
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>{ item.images.standard_resolution.url }</Text>
                    <TextInput
                        ref='textInput'
                        style={ styles.textInput }
                        onChangeText={ (text) => this.setState({ text: text }) }
                        value={this.state.text}
                        multiline={true}
                        autoFocus={true}
                        placeholder={ 'Type here' } />

                </View>
            </View>
        );
    }
});

let styles = StyleSheet.create({
    textInput: {
        height: 100,
        width: 300,
        borderRadius: 4,
        borderWidth: 1,
        paddingLeft: 8,
        paddingRight: 8,
        backgroundColor: 'white',
        fontSize: 14
    }
});

module.exports = Detail;