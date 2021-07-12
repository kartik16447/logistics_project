const { Item } = require("../models/item");
const { Order, get_by_id, get_all, delete_by_id } = require("../models/order");
const { Warehouse } = require("../models/warehouse");
const { Vendor } = require("../models/vendor");

const create = (req, res) => {
  const body = JSON.parse(req.body);
  console.log(`\n\npost request for Order ${data}\n\n`);
  // const newOrder = new Order(req.body);
  //Alternate Method:
  var wid = "";
  var vid = "";

  Warehouse.findOne({ name: body.warehouseName })
    .exec()
    .then(function (data) {
      console.log(data._id);
      wid = data._id;
    })
    .then(function (data) {
      Vendor.findOne({ name: body.vendorName })
        .exec()
        .then(function (data) {
          console.log(data._id);
          vid = data._id;
        })
        .then(function (data) {
          create_post(req, res, wid, vid, body);
        });
    });
};

const create_post = (req, res, wid, vid, body) => {
  const newOrder = new Order({
    receiverWarehouse: wid,
    vendor: vid,
    items: body.item,
    status: body.item,
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
