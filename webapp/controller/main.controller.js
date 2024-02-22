sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], function(Controller,MessageToast,JSONModel,ResourceModel) {

    "use strict";

    return Controller.extend("ui5.walkthrough.controller.main", {

        onInit: function() {
            let data = {
                name: "Hari"
            };
            let model = new JSONModel(data);
            this.getView().setModel(model);

            let i18nModel = new ResourceModel({
                bundleName: "ui5.walkthrough.i18n.i18n"
            });
            this.getView().setModel(i18nModel, "i18n");
        },

        onPressDisplay: function() {
            MessageToast.show("This is a message from message toast");
        }

    });

});

