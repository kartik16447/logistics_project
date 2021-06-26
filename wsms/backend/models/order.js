const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const { vendorSchema } = require("./vendor");
const { warehouseSchema } = require("./warehouse");
const { itemSchema } = require("./item");

const Vendor = mongoose.model("Vendor", vendorSchema).schema;
const Warehouse = mongoose.model("Warehouse", warehouseSchema).schema;
const Item = mongoose.model("Item", itemSchema).schema;

const orderSchema = new Schema({
  warehouseId: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    unique: false,
  },
  vendorId: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    unique: false,
  },
  items: {
    type: [Item],
    uniqueItems: true, //not working
  },
});
//TODO: Find a way to make Item.name in items array unique.

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
