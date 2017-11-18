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
        controllerAs: 'ctrl',
        controller: function (inventory) {
          this.inventory = inventory;
          console.log(inventory);
        },
        resolve: {
          inventory: [
            'InventoryService',
            function (InventoryService) {
              return InventoryService.getInventory();
            }
          ]
        }

      })        .state('app.inventory.view', {
              url: '/:productId',
              templateUrl: 'modules/inventory/views/view.html',
              controllerAs: 'ctrl',
              controller: function (inventory) {
                this.inventory = inventory;
                console.log(inventory);
              },
              resolve: {
                inventory: function ($stateParams, InventoryService) {
                  return InventoryService.getInvent($stateParams.productId);
                }
              }
            })      .state('app.inventory.delete', {
                url: '/:productId/delete',
                template: '',
                controllerAs: 'ctrl',
                controller: function ($state, inventory,InventoryService) {
                  InventoryService.deleteProduct(inventory.id, function () {
                    $state.go('^.list');
                  }, function () {
                    $state.go('^.list');
                  });
                },
                resolve: {
                  inventory: function ($stateParams, InventoryService) {
                    return InventoryService.getInvent($stateParams.productId);
                  }
                }
              });

    });

})();
