const { Debug, get_debug_by_id, get_all_debugs } = require("../models/debug");
const { Vendor } = require("../models/vendor");
const debug_create_post = (req, res) => {
  console.log(`post request for debug`);
  const id = req.body.vendorId;
  //   const newDebug = new Debug(req.body);
  // Alternate Method:

  const newDebug = new Debug({
    vendor: req.body.vendorId,
  });
  newDebug
    .save()
    .then((result) => {
      res.redirect("/");
      console.log();
      c;
    })
    .catch((err) => {
      console.log(err);
      //   console.log("failure");
      console.log(req.body);
      res.redirect("/");
    });
};

const debug_get = (req, res) => {
  console.log(`request made for debug page`);
  if (req.query.id != null) {
    const id = req.query.id;
    console.log(`get request made for debug: ${id}`);
    get_debug_by_id(req, res, id);
  } else {
    get_all_debugs(req, res);
  }
};

module.exports = {
  debug_create_post,
  debug_get,
};
