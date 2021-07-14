const {
  Warehouse,
  get_by_id,
  get_all,
  delete_by_id,
  get_id,
} = require("../models/warehouse");

const create_post = (req, res) => {
  console.log(`post request for warehouse`);
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

const get = (req, res) => {
  console.log(`get request made for warehouse page`);
  if (req.query.id != null) {
    const id = req.query.id;
    console.log(`get request made for warehouse: ${id}`);
    get_by_id(req, res, id);
  } else {
    get_all(req, res);
  }
};

const _delete = (req, res) => {
  console.log(`delete request made`);
  if (req.query.id != null) {
    const id = req.query.id;
    console.log(`delete request made for warehouse: ${id}`);
    delete_by_id(req, res, id);
  } else {
    console.log(`please provide an id to delete`);
  }
};

const get_id_by_name = (req, res) => {
  console.log(`name to id`);
  if (req.query.name != null) {
    const warehouseName = req.query.name;
    console.log(`name: ${warehouseName}`);
    const id = get_id(req, res, warehouseName);
    console.log(id);
  } else {
    console.log(`please provide name`);
  }
};

module.exports = {
  create_post,
  get,
  _delete,
  get_id_by_name,
};
