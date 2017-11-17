(function () {
  'use strict';
  angular
    .module('com.module.inventory')
    .config(function ($stateProvider) {
      $stateProvider
      .state('app.inventory', {
        abstract: true,
        url: '/inventory',
        templateUrl: 'modules/inventory/views/main.html'
      }).state('app.inventory.list', {
        url: '',
        templateUrl: 'modules/inventory/views/list.html',
        controller: 'InventoryListCtrl'

      });

    });

})();
