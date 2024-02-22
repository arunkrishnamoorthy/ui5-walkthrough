sap.ui.define([
    "sap/ui/core/UIComponent"
], function(UIComponent) {


    return UIComponent.extend("ui5.walkthrough", {

        metadata: {
            "rootView": {
                "viewName": "ui5.walkthrough.view.main",
                "type": "XML",
                "id": "app"
            }
        },

        init: function() {
            UIComponent.prototype.init.apply(this,arguments);

        }

    });


});