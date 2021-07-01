const express = require("express");
const warehouse = require("../controllers/createWarehouse");

const router = express.Router();

router.post("/", warehouse.create_post);
router.get("/", warehouse.get);
router.delete("/", warehouse._delete);

module.exports = router;
