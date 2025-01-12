sap.ui.define(["sap/ui/core/UIComponent"], function (UIComponent) {
  "use strict";

  return UIComponent.extend("sap.ui.demo.nav.Component", {
    metadata: {
      manifest: "json",
    },

    init: function () {
      UIComponent.prototype.init.apply(this, arguments);
      this.getRouter().initialize();
      // this.setModel(models.createDeviceModel(), "device");
      // this.setModel(new sap.ui.model.odata.v2.ODataModel("Northwind"));

    },
  });
});
