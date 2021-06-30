const express = require("express");
const vendor = require("../controllers/createVendor");

const router = express.Router();

router.post("/", vendor.create_post);
router.get("/", vendor.get);
router.delete("/", vendor._delete);

module.exports = router;
