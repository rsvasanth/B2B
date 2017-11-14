(function () {
  'use strict';
  angular
    .module('com.module.orders')
    .config(function ($stateProvider) {
      $stateProvider
      .state('app.orders', {
        abstract: true,
        url: '/orders',
        templateUrl: 'modules/orders/views/main.html'
      }).state('app.orders.list', {
        url: '',
        templateUrl: 'modules/orders/views/list.html'
        
      });

    });

})();
