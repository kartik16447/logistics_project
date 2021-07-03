const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const { vendorSchema } = require("./vendor");
const { warehouseSchema } = require("./warehouse");
const { itemSchema } = require("./item");

const Vendor = mongoose.model("Vendor", vendorSchema).schema;
const Warehouse = mongoose.model("Warehouse", warehouseSchema).schema;
const Item = mongoose.model("Item", itemSchema).schema;

const orderSchema = new Schema({
  warehouse: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Warehouse",
    required: true,
    unique: false,
  },
  vendor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vendor",
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

const get_by_id = (req, res, id) => {
  Order.findById(id)
    .populate("warehouse")
    .populate("vendor")
    .exec()
    .then(function (data) {
      console.log(data);
      res.send(data);
      console.log(`Success!`);
    });
};

const get_all = (req, res) => {
  // Order.find({ vendor: "60d3a4e5edad0186bb03bc06" })
  // Order.find({ warehouse: "60d3a3cea594a9866b624cf9" })
  Order.find()
    .populate("warehouse")
    .populate("vendor")
    .exec()
    .then(function (data) {
      res.send(data);
    });
};

const delete_by_id = (req, res, id) => {
  Order.findByIdAndDelete(id)
    .exec()
    .then(function (data) {
      res.send(data);
      console.log("Deleted!");
    });
};

module.exports = {
  Order,
  get_by_id,
  get_all,
  delete_by_id,
};
