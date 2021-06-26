const { findById } = require("../models/item");
const { Order, get_order_by_id, get_all_orders } = require("../models/order");

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
    get_order_by_id(req, res, id);
  } else {
    get_all_orders(req, res);
  }
};

module.exports = {
  create,
  get,
};
