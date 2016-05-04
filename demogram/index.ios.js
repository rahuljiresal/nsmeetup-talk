
'use strict';

let React = require('react-native');
let Nav = require('./scripts/nav');

var demogram = React.createClass({

    render: function() {
        return (
            <Nav />
        )
    }
});


React.AppRegistry.registerComponent('demogram', () => demogram);
