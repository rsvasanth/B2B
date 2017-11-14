(function () {
  'use strict';
  angular
    .module('com.module.inventory')
    .run(function ($rootScope, Inventory, gettextCatalog) {
      $rootScope.addMenu(gettextCatalog.getString('Inventory'), 'app.inventory.list',
        'fa-cubes');
      Inventory.find(function (data) {
            $rootScope.addDashboardBox(gettextCatalog.getString('Inventory'), 'bg-yellow', 'ion-ios7-cart-outline', data.length, 'app.inventory.list');
          });
      // $rootScope.addMenu(gettextCatalog.getString('Browser'), 'app.browser.models', 'fa-globe');
    });

})();
