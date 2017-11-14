(function () {
  'use strict';
  angular
    .module('com.module.orders')
    .run(function ($rootScope,Order ,  gettextCatalog) {
      $rootScope.addMenu(gettextCatalog.getString('Orders'), 'app.orders.list',
      'fa-cart-arrow-down');
    Order.find(function (data) {
        $rootScope.addDashboardBox(gettextCatalog.getString('Orders'), 'bg-yellow', 'ion-ios7-cart-outline', data.length, 'app.orders.list');
      });
    });

})();
