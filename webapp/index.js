sap.ui.define([
    "sap/m/Text",
    "sap/m/Button"
], function(Text,Button) {
   
    new Text("demoText", {
        text: "This is a demo text from an UI5 control"
    }).placeAt("content");
    
});