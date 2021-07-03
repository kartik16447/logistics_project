const { findById } = require("../models/item");
const { Order, get_by_id, get_all, delete_by_id } = require("../models/order");
const { Warehouse } = require("../models/warehouse");
const { Vendor } = require("../models/vendor");

const create = (req, res) => {
  console.log(`post request for Order ${req.body}`);
  // const newOrder = new Order(req.body);
  //Alternate Method:
  var wid = "";
  var vid = "";
  Warehouse.findOne({ name: req.body.warehouse })
    .exec()
    .then(function (data) {
      console.log(data._id);
      wid = data._id;
    })
    .then(function (data) {
      Vendor.findOne({ name: req.body.vendor })
        .exec()
        .then(function (data) {
          console.log(data._id);
          vid = data._id;
        })
        .then(function (data) {
          create_post(req, res, wid, vid);
        });
    });
};

const create_post = (req, res, wid, vid) => {
  const newOrder = new Order({
    warehouse: wid,
    vendor: vid,
    items: req.body.items,
  });
  newOrder
    .save()
    .then((result) => {
      res.redirect("/");
      console.log(result);
      console.log(`Success!`);
      // console.log(get_vendor_by_id(req, res, req.body.vendorId));
    })
    .catch((err) => {
      console.log(err);
      console.log(req.body);
      console.log(req.body.items[0]);
      res.redirect("/");
    });
};

const get = (req, res) => {
  console.log(`get request made for order page`);
  if (req.query.id != null) {
    const id = req.query.id;
    console.log(`get request made for order: ${id}`);
    get_by_id(req, res, id);
  } else {
    get_all(req, res);
  }
};

const order_delete = (req, res) => {
  console.log(`delete request made`);
  if (req.query.id != null) {
    const id = req.query.id;
    console.log(`delete request made for order: ${id}`);
    delete_by_id(req, res, id);
  } else {
    console.log(`please provide an id to delete`);
  }
};

module.exports = {
  create,
  get,
  order_delete,
};
