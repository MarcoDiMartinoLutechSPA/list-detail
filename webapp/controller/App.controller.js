sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel"
],

  function(Controller, JSONModel) {
      "use strict";
  
      return Controller.extend("sap.btp.listdetail.controller.App", {
        onInit: function() 
        {   
            var oViewModel = new JSONModel({
              layout : "OneColumn"
            });
            
            this.getView().setModel(oViewModel, "mainView");
        }
      });
    }
  );
  
  