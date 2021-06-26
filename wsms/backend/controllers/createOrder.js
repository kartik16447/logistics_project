const Order = require("../models/order");

const create = (req, res) => {
  console.log(`post request for Order ${req.body}`);
  const newOrder = new Order(req.body);
  //Alternate Method:
  // const newOrder = new Order({
  //   warehouseId: req.body.warehouseId,
  //   vendorId: req.body.vendorId,
  //   items: req.body.items,
  // });
  newOrder
    .save()
    .then((result) => {
      res.redirect("/");
      console.log(result);
      console.log(`Success!`);
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
  res.send("<p>Order<p>");
  if (req.query.id != null) {
    const id = req.query.id;
    console.log(`get request made for order: ${id}`);
  }
};

const get_order = (req, res) => {
  console.log(`get request made for order: ${req.params.id}`);
  // res.redirect("/");
};

module.exports = {
  create,
  get,
  get_order,
};
