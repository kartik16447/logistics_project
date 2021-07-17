const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const { vendorSchema } = require("./vendor");
const { warehouseSchema } = require("./warehouse");
const { itemSchema } = require("./item");

const Vendor = mongoose.model("Vendor", vendorSchema).schema;
const Warehouse = mongoose.model("Warehouse", warehouseSchema).schema;
const Item = mongoose.model("Item", itemSchema).schema;

const orderSchema = new Schema({
  receiverWarehouse: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Warehouse",
    unique: false,
  },
  senderWarehouse: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Warehouse",
    unique: false,
  },
  vendor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vendor",
    unique: false,
  },
  consignee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Consignee",
    unique: false,
  },
  items: {
    type: [Item],
  },
  totalValue: {
    type: Number,
    required: false,
    unique: false,
  },
  status: {
    type: [Item],
  },
  nature: {
    type: String,
    enum: ["inward", "outward"],
    required: true,
    unique: false,
  },
  isDelivered: {
    type: Boolean,
    required: true,
    default: false,
  },
});
//TODO: Find a way to make Item.name in items array unique.

const Order = mongoose.model("Order", orderSchema);

const get_by_id = (req, res, id) => {
  Order.findById(id)
    .populate("receiverWarehouse")
    .populate("senderWarehouse")
    .populate("vendor")
    .exec()
    .then(function (data) {
      console.log(data);
      res.send(data);
      console.log(`Success!`);
    })
    .catch((error) => {
      console.log(error);
    });
};

const get_all = (req, res) => {
  // Order.find({ vendor: "60d3a4e5edad0186bb03bc06" })
  // Order.find({ warehouse: "60d3a3cea594a9866b624cf9" })
  Order.find()
    .populate("receiverWarehouse")
    .populate("senderWarehouse")
    .populate("vendor")
    .exec()
    .then(function (data) {
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

const delete_by_id = (req, res, id) => {
  Order.findByIdAndDelete(id)
    .exec()
    .then(function (data) {
      res.send(data);
      console.log("Deleted!");
    })
    .catch((error) => {
      console.log(error);
    });
};

const update_status = (req, res, id, status) => {
  Order.findById(id, function (err, doc) {
    if (err) {
      console.log(err);
    }
    doc.status = status;
    doc.save();
    res.send(doc);
  }).catch((error) => {
    console.log(error);
  });
};

module.exports = {
  Order,
  get_by_id,
  get_all,
  delete_by_id,
  update_status,
};
