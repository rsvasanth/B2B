(function () {
  'use strict';
  angular
    .module('com.module.inventory')

    .controller('InventoryListCtrl', function ($scope,Inventory) {
      $scope.inventory = angular;
    });

})();
