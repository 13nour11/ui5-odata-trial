sap.ui.define(
  [
    // "sap/ui/demo/nav/controller/BaseController",
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
  ],
  function (Controller, MessageBox) {
    "use strict";

    return Controller.extend(
      "sap.ui.demo.nav.controller.modelEntity.ProductList",
      {
        onInit: function () {
          // Initialize any required logic
          var that = this;
        //   var odataModel = new sap.ui.model.odata.v2.ODataModel(
        //     // "NorthwindService/V2/(S(jjlmjbf1oszuuecc251trygy))/OData/OData.svc"
        //     "https://services.odata.org/V3/(S(njnoaszq3mvdyuv1fepveyzp))/OData/OData.svc"
        //   );
        var odataModel = new sap.ui.model.odata.v2.ODataModel("https://services.odata.org/V3/(S(njnoaszq3mvdyuv1fepveyzp))/OData/OData.svc");


          odataModel.read("/Products", {
            success: function (oData, oResponse) {
              MessageBox.success("Data fetched successfully");
              that
                .getView()
                .byId("productList")
                .setModel(new sap.ui.model.json.JSONModel(oData));
            },
            error: function (oError) {
              console.error("Error:", oError);
              MessageBox.error("Error fetching data");
            },
          });
          this.getView().setModel(odataModel);
        },

        // Action handlers for Create, Update, Delete buttons
        createData: function () {
          var ID = this.getView().byId("idinput").getValue();
          var Name = this.getView().byId("nameinput").getValue();
          var data = {
            ID: parseInt(ID),
            Name: Name,
          };
          var odataModel = this.getView().getModel();
          odataModel.create("/Categories", data, {
            success: function (data, response) {
              MessageBox.success("Data successfully created");
            },
            error: function (error) {
              MessageBox.error("Error while creating the data");
            },
          });
        },

        updateData: function () {
          var list = this.getView().byId("list");
          var selItem = list.getSelectedItem();
          var title = selItem.getTitle();
          var description = selItem.getDescription();
          var Name = this.getView().byId("nameinput").getValue();
          var payload = {
            ID: parseInt(title),
            Name: Name,
          };

          var path = "/Categories(" + title + ")";
          var odataModel = this.getView().getModel();
          // @ts-ignore
          odataModel.update(path, payload, {
            success: function (data, response) {
              MessageBox.success("Successfully Updated");
            },
            error: function (error) {
              MessageBox.error("Error while updating the data");
            },
          });
        },

        deleteData: function () {
          var list = this.getView().byId("list");
          var selItem = list.getSelectedItem();
          var title = selItem.getTitle();
          var path = "/Categories(" + title + ")"; ///Categories(3);
          var odataModel = this.getView().getModel();
          odataModel.remove(path, {
            success: function (data, response) {
              MessageBox.success("Deleted data");
            },
            error: function (error) {
              MessageBox.error("Deletion failed");
            },
          });
        },
      }
    );
  }
);
