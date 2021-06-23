const Order = require("../models/order");

const order_create_post = (req, res) => {
  console.log(`creating a new order`);
  const order = new Order(req.body);
  order
    .save()
    .then((result) => {
      res.redirect("/");
      console.log(`Success!`);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  order_create_post,
};
