(function () {
  'use strict';
  angular
    .module('com.module.inventory')

    .controller('InventoryListCtrl', ['$scope', 'Inventory','InventoryService', function($scope,
        Inventory,InventoryService) {
$scope.inventory = InventoryService.getInventory().then(function (res,err) {
  return res;
});
      console.log($scope.inventory)
    }]);

})();
