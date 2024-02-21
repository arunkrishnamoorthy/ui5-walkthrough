sap.ui.define([
    "sap/ui/core/mvc/XMLView"
], function(XMLView) {

    XMLView.create({
        viewName: "ui5.walkthrough.view.main"
    }).then((view)=> {
        view.placeAt("content");
    });

});
