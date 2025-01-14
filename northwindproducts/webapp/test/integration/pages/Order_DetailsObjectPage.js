sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'com.northwindproducts.northwindproducts',
            componentId: 'Order_DetailsObjectPage',
            contextPath: '/Products/Order_Details'
        },
        CustomPageDefinitions
    );
});