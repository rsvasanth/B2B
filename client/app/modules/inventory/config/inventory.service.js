(function () {
  'use strict';
  angular
    .module('com.module.inventory')
    .service('InventoryService', function (CoreService, Inventory, gettextCatalog) {

      this.getInventory = function () {
        return Inventory.find({

        }).$promise;
      };
      this.getInvent = function (id) {
        return Inventory.findById({
          id: id
        }).$promise;
      };
      this.deleteProduct = function (id, successCb, cancelCb) {
        CoreService.confirm(
          gettextCatalog.getString('Are you sure?'),
          gettextCatalog.getString('Deleting this cannot be undone'),
          function () {
            Inventory.destroyById({id: id}, function () {
              CoreService.toastSuccess(
                gettextCatalog.getString('Product deleted'),
                gettextCatalog.getString('Your product is deleted!'));
              successCb();
            }, function (err) {
              CoreService.toastError(
                gettextCatalog.getString('Error deleting product'),
                gettextCatalog.getString('Your product is not deleted! ') + err);
              cancelCb();
            });
          },
          function () {
            cancelCb();
          }
        );
      };

    });

})();
