sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/btp/listdetail/model/models"
], 

function (UIComponent, models) {
    "use strict";

    return UIComponent.extend("sap.btp.listdetail.Component", {
        metadata: {
            manifest: "json"
        },

        init: function () {
            // Chiamare il metodo init della superclasse
            UIComponent.prototype.init.apply(this, arguments);

            // Inizializzare il router
            this.getRouter().initialize();

            // Impostare il modello del dispositivo
            this.setModel(models.createDeviceModel(), "device");
        }
    });
});