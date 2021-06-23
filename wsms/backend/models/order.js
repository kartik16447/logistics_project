const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const { vendorSchema } = require("./vendor");
const { warehouseSchema } = require("./warehouse");

const Vendor = mongoose.model("Vendor", vendorSchema);
const Warehouse = mongoose.model("Warehouse", warehouseSchema);

const orderSchema = new Schema({
  warehouse: {
    type: Warehouse.schema,
    required: true,
  },
  vendor: {
    type: Vendor.schema,
    required: true,
  },
});
