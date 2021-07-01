const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const warehouseSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
  },
});

const Warehouse = mongoose.model("Warehouse", warehouseSchema);

const get_by_id = (req, res, id) => {
  Warehouse.findById(id)
    .exec()
    .then(function (data) {
      console.log(data);
      res.send(data);
    });
};

const get_all = (req, res, id) => {
  Warehouse.find()
    .exec()
    .then(function (data) {
      res.send(data);
    });
};

const delete_by_id = (req, res, id) => {
  Warehouse.findByIdAndDelete(id)
    .exec()
    .then(function (data) {
      res.send(data);
      console.log("Deleted!");
    });
};

module.exports = {
  Warehouse,
  get_by_id,
  get_all,
  delete_by_id,
};
