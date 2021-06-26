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

const get_vendor_by_id = (req, res, id) => {
  Vendor.findById(id)
    .exec()
    .then(function (data) {
      res.send(data);
    });
};

const get_all_vendors = (req, res, id) => {
  Vendor.find()
    .exec()
    .then(function (data) {
      res.send(data);
    });
};

module.exports = {
  Vendor,
  get_vendor_by_id,
  get_all_vendors,
};
