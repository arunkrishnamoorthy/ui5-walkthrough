sap.ui.define([
    "sap/ui/core/ComponentContainer"
], function(ComponentContainer) {

    new ComponentContainer({
        async: true,
        name: "ui5.walkthrough",
        settings: {
            id: "ui5.walkthrough"
        }
    }).placeAt("content");

});

