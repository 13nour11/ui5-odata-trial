sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/northwindproducts/northwindproducts/test/integration/FirstJourney',
		'com/northwindproducts/northwindproducts/test/integration/pages/ProductsList',
		'com/northwindproducts/northwindproducts/test/integration/pages/ProductsObjectPage',
		'com/northwindproducts/northwindproducts/test/integration/pages/Order_DetailsObjectPage'
    ],
    function(JourneyRunner, opaJourney, ProductsList, ProductsObjectPage, Order_DetailsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/northwindproducts/northwindproducts') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheProductsList: ProductsList,
					onTheProductsObjectPage: ProductsObjectPage,
					onTheOrder_DetailsObjectPage: Order_DetailsObjectPage
                }
            },
            opaJourney.run
        );
    }
);