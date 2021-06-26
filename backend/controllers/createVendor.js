const {
  Vendor,
  get_vendor_by_id,
  get_all_vendors,
} = require("../models/vendor");

const vendor_create_post = (req, res) => {
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

const vendor_get = (req, res) => {
  console.log(`request made for vendor page`);
  if (req.query.id != null) {
    const id = req.query.id;
    console.log(`get request made for vendor: ${id}`);
    get_vendor_by_id(req, res, id);
    // res.redirect("/vendor");
  } else {
    get_all_vendors(req, res);
  }
};

module.exports = {
  vendor_create_post,
  vendor_get,
};
