const { Debug, get_by_id, get_all, delete_by_id } = require("../models/debug");
const { Vendor } = require("../models/vendor");

const create_post = (req, res) => {
  console.log(`post request for debug`);
  const id = req.body.vendorId;
  //   const newDebug = new Debug(req.body);
  // Alternate Method:

  const newDebug = new Debug({
    vendor: id,
  });
  newDebug
    .save()
    .then((result) => {
      res.redirect("/");
      console.log("Success!");
    })
    .catch((err) => {
      console.log(err);
      //   console.log("failure");
      console.log(req.body);
      res.redirect("/");
    });
};

const get = (req, res) => {
  console.log(`request made for debug page`);
  if (req.query.id != null) {
    const id = req.query.id;
    console.log(`get request made for debug: ${id}`);
    get_by_id(req, res, id);
  } else {
    get_all(req, res);
  }
};

const _delete = (req, res) => {
  console.log(`delete request made`);
  if (req.query.id != null) {
    const id = req.query.id;
    console.log(`delete request made for debug: ${id}`);
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
