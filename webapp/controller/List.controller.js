sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("sap.btp.listdetail.controller.List", 
    {
        onInit: function () {
            this.getView().setModel(new JSONModel(), "mainView");
        },

        onSelect: function (oEvent) 
        {
            var oItem = oEvent.getSource();
            var oCtx = oItem.getBindingContext();

            this.getOwnerComponent().getRouter().navTo("detail", {
                Carrid: oCtx.getProperty("Carrid")
            });
        }
    });
});