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

const get_by_id = (req, res, id) => {
  Vendor.findById(id)
    .exec()
    .then(function (data) {
      res.send(data);
    });
};

const get_all = (req, res, id) => {
  Vendor.find()
    .exec()
    .then(function (data) {
      res.send(data);
    });
};

const delete_by_id = (req, res, id) => {
  Vendor.findByIdAndDelete(id)
    .exec()
    .then(function (data) {
      res.send(data);
      console.log("Deleted!");
    });
};

module.exports = {
  Vendor,
  get_by_id,
  get_all,
  delete_by_id,
};
