const express = require("express");
const vendor = require("../controllers/createVendor");

const router = express.Router();

router.post("/", vendor.vendor_create_post);
router.get("/", vendor.vendor_get);

module.exports = router;
