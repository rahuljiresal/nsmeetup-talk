/**
 * Created by rahul on 5/3/16.
 */


'use strict';

let React = require('react-native');
let _createClass = React.createClass;

let noRenderMethod = function (displayName) {
    throw new Error(`Invariant Violation: Component "${ displayName }" must implement a "render_ios" method.`);
};

module.exports = Object.assign(React, {
    createClass: function (obj) {
        obj.render = obj.render_ios ||
            obj.render_mobile ||
            obj.render ||
            noRenderMethod.bind(this, obj.displayName);
        return _createClass(obj);
    }
});
