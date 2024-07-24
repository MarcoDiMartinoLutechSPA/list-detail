sap.ui.define([
    "sap/ui/core/mvc/Controller",
], function (Controller) {
    "use strict";

    return Controller.extend("sap.btp.listdetail.controller.Detail", 
    {
        onInit: function () 
        {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.getRoute("detail").attachPatternMatched(this._onObjectMatched, this);
        },

        _onObjectMatched: function (oEvent) 
        {
            var sCarrid = oEvent.getParameter("arguments").Carrid;

            this.getView().bindElement({
                path: "/UX_C_Carrier_TP('" + sCarrid + "')",
                model: "mainView"
            });
        }
    });
});
