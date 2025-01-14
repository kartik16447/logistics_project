const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vendorSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
  },
});

const Vendor = mongoose.model("Vendor", vendorSchema);
module.exports = Vendor;
