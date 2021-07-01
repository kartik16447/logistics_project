const mongoose = require("mongoose");
const { vendorSchema } = require("./vendor");
const Schema = mongoose.Schema;

const Vendor = mongoose.model("Vendor", vendorSchema).schema;

const debugSchema = new Schema({
  vendor: {
    type: Vendor,
    required: true,
  },
});

const Debug = mongoose.model("Debug", debugSchema);

const get_debug_by_id = (req, res, id) => {
  Debug.findById(id)
    .exec()
    .then(function (data) {
      return Debug(data);
    });
};

const get_all_debugs = (req, res, id) => {
  Debug.find()
    .exec()
    .then(function (data) {
      res.send(data);
    });
};

module.exports = {
  Debug,
  get_debug_by_id,
  get_all_debugs,
};
