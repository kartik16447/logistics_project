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
  contact: {
    type: String,
  },
  emailId: {
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
    })
    .catch((error) => {
      console.log(error);
    });
};

const get_id = async function (req, res, name) {
  return await get_id_by_name(name);
};

const get_id_by_name = (name) => {
  Warehouse.findOne({ name: name })
    .exec()
    .then(function (data) {
      console.log(data._id);
      return data._id;
    })
    .catch((error) => {
      console.log(error);
    });
};

const get_all = (req, res, id) => {
  Warehouse.find()
    .exec()
    .then(function (data) {
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

const delete_by_id = (req, res, id) => {
  Warehouse.findByIdAndDelete(id)
    .exec()
    .then(function (data) {
      res.send(data);
      console.log("Deleted!");
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = {
  Warehouse,
  get_by_id,
  get_all,
  delete_by_id,
  get_id,
};
