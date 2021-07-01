const {
  Warehouse,
  get_warehouse_by_id,
  get_all_warehouses,
} = require("../models/warehouse");

const warehouse_create_post = (req, res) => {
  console.log(`post request for Warehouse ${req.body}`);
  const newWarehouse = new Warehouse(req.body);
  //Alternate Method:
  // const newWarehouse = new Warehouse({
  //   name: req.body.name,
  //   address: req.body.address,
  // });
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
  if (req.query.id != null) {
    const id = req.query.id;
    console.log(`get request made for warehouse: ${id}`);
    get_warehouse_by_id(req, res, id);
  } else {
    get_all_warehouses(req, res);
  }
};

module.exports = {
  warehouse_create_post,
  warehouse_get,
};
