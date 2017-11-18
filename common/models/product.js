module.exports = function (Product) {
  var app = require("../../server/server");

var Invent = app.models.Inventory;
  // Set the username to the users email address by default.
Product.observe('after save', function setDefaultUsername(ctx, next) {
    if (ctx.instance.status == true && ctx.instance.allow_order == true) {
console.log(ctx.instance);
app.models.Inventory.upsert({productId: ctx.instance.id,product: ctx.instance.name, vendor: ctx.instance.vendor,qty:ctx.instance.qty,price:ctx.instance.price,catagoery:'test'}, function(err, userInstance) {
    console.log(userInstance);
  });
    }
    next();
  });

};
