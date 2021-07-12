const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const consigneeSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
  },
});

const Consignee = mongoose.model("Consignee", consigneeSchema);

const get_by_id = (req, res, id) => {
  Consignee.findById(id)
    .exec()
    .then(function (data) {
      res.send(data);
    });
};

const get_all = (req, res, id) => {
  Consignee.find()
    .exec()
    .then(function (data) {
      res.send(data);
    });
};

const delete_by_id = (req, res, id) => {
  Consignee.findByIdAndDelete(id)
    .exec()
    .then(function (data) {
      res.send(data);
      console.log("Deleted!");
    });
};

module.exports = {
  Consignee,
  get_by_id,
  get_all,
  delete_by_id,
};
