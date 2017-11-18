'use strict';

module.exports = function(Inventory) {
Inventory.validatesUniquenessOf( 'productId',{message: 'product all ready pushlished'});
};
