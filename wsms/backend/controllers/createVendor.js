const {
  Vendor,
  get_by_id,
  get_all,
  delete_by_id,
} = require("../models/vendor");

const create_post = (req, res) => {
  console.log(`post request for vendor`);
  const newVendor = new Vendor(req.body);
  //Alternate Method:
  // const newVendor = new Vendor({
  //   name: req.body.name,
  //   address: req.body.address,
  // });
  newVendor
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
  console.log(`request made for vendor page`);
  if (req.query.id != null) {
    const id = req.query.id;
    console.log(`get request made for vendor: ${id}`);
    get_by_id(req, res, id);
    // res.redirect("/vendor");
  } else {
    get_all(req, res);
  }
};

const _delete = (req, res) => {
  console.log(`delete request made`);
  if (req.query.id != null) {
    const id = req.query.id;
    console.log(`delete request made for vendor: ${id}`);
    delete_by_id(req, res, id);
  } else {
    console.log(`please provide an id to delete`);
  }
};

module.exports = {
  create_post,
  get,
  _delete,
};
