const { findById } = require("../models/item");
const { Order, get_by_id, get_all, delete_by_id } = require("../models/order");

const create = (req, res) => {
  console.log(`post request for Order ${req.body}`);
  // const newOrder = new Order(req.body);
  //Alternate Method:
  const newOrder = new Order({
    warehouse: req.body.warehouseId,
    vendor: req.body.vendorId,
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
