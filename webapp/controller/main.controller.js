sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
], function(Controller,MessageToast,JSONModel) {

    "use strict";

    return Controller.extend("ui5.walkthrough.controller.main", {

        onInit: function() {
            let data = {
                name: "Hari"
            };
            let model = new JSONModel(data);
            this.getView().setModel(model);
        },

        onPressDisplay: function() {
            MessageToast.show("This is a message from message toast");
        }

    });

});

