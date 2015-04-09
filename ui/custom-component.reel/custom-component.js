/**
 * @module ui/custom-component.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class CustomComponent
 * @extends Component
 */
exports.CustomComponent = Component.specialize(/** @lends CustomComponent# */ {
    constructor: {
        value: function CustomComponent() {
            this.super();
        }
    }
});
