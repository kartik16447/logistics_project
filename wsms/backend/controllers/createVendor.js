const Vendor = require("../models/vendor");

const vendor_create_post = (req, res) => {
  console.log(`post request for vendor`);
  const newVendor = new Vendor({
    name: req.body.name,
    address: req.body.address,
  });
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
  res.redirect("/");
};

module.exports = {
  vendor_create_post,
  vendor_get,
};
