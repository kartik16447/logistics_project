const express = require("express");
const cors = require("cors");

const vendor = require("../controllers/createVendor");

const router = express.Router();
router.use(cors());

router.post("/", vendor.create_post);
router.get("/", vendor.get);
router.delete("/", vendor._delete);

module.exports = router;
