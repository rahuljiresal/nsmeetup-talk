/**
 * Created by rahul on 5/3/16.
 */


'use strict';

let React = require('./util/react');
let Main = require('./main');
let Navigator = require('react-native-rj-navigator').Navigator;
let { View, Text }  = React;

var Nav = React.createClass({

    render_ios: function() {
        return (
            <Navigator
                backgroundColor={ 'white' }
                tintColor={ 'black' }
                initialRoute={{ component: Main, props: this.props }} />
        )
    },

    render_android: function() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <Text>Hello</Text>
            </View>
        )
    }

});


module.exports = Nav;
