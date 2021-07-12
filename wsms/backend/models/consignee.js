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
  emailId: {
    type: String,
  },
  contact: {
    type: String,
  },
});

const Consignee = mongoose.model("Consignee", consigneeSchema);

const get_by_id = (req, res, id) => {
  Consignee.findById(id)
    .exec()
    .then(function (data) {
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

const get_all = (req, res, id) => {
  Consignee.find()
    .exec()
    .then(function (data) {
      console.log("sending all consignees");
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

const delete_by_id = (req, res, id) => {
  Consignee.findByIdAndDelete(id)
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
  Consignee,
  get_by_id,
  get_all,
  delete_by_id,
};
