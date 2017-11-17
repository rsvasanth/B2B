(function () {
  'use strict';
  angular
    .module('com.module.reports')
    .controller('ReportsCtrl', function ($scope) {
      $scope.items = [{
        name: 'Sales',
        sref: '.coreservice'
      }, {
        name: 'Inventory',
        sref: '.autofields'
      }, {
        name: 'Shipping',
        sref: '.bootstrap'
      }, {
        name: 'Orders',
        sref: '.dashboard'
      }, {
        name: 'Products',
        sref: '.schemaform'
      }, {
        name: 'Payment',
        sref: '.forms'
      }, {
        name: 'Vendor',
        sref: '.faker'
      }];
    });

})();
