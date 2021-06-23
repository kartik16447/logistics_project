const Warehouse = require("../models/warehouse");

const warehouse_create_post = (req, res) => {
  console.log(`post request for Warehouse ${req.body}`);
  const newWarehouse = new Warehouse({
    name: req.body.name,
    address: req.body.address,
  });
  newWarehouse
    .save()
    .then((result) => {
      res.redirect("/");
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
      console.log(req.body);
      res.redirect("/");
    });
};

const warehouse_get = (req, res) => {
  console.log(`get request made for warehouse page`);
};

module.exports = {
  warehouse_create_post,
  warehouse_get,
};
