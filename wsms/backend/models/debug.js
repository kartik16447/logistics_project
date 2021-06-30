const mongoose = require("mongoose");
const { vendorSchema } = require("./vendor");
const Schema = mongoose.Schema;

const Vendor = mongoose.model("Vendor", vendorSchema).schema;

const debugSchema = new Schema({
  vendor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vendor",
    required: true,
    unique: false,
  },
});

const Debug = mongoose.model("Debug", debugSchema);

const get_by_id = (req, res, id) => {
  Debug.findById(id)
    .exec()
    .then(function (data) {
      res.send(data);
    });
};

const get_all = (req, res, id) => {
  Debug.find()
    .exec()
    .then(function (data) {
      res.send(data);
    });
};

const delete_by_id = (req, res, id) => {
  Debug.findByIdAndDelete(id)
    .exec()
    .then(function (data) {
      res.send(data);
      console.log("Deleted!");
    });
};

module.exports = {
  Debug,
  get_by_id,
  get_all,
  delete_by_id,
};
