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

const get_warehouse_by_id = (req, res, id) => {
  Warehouse.findById(id)
    .exec()
    .then(function (data) {
      console.log(data);
      res.send(data);
    });
};

const get_all_warehouses = (req, res, id) => {
  Warehouse.find()
    .exec()
    .then(function (data) {
      res.send(data);
    });
};

module.exports = {
  Warehouse,
  get_warehouse_by_id,
  get_all_warehouses,
};
