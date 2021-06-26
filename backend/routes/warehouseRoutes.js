const express = require("express");
const warehouse = require("../controllers/createWarehouse");

const router = express.Router();

router.post("/", warehouse.warehouse_create_post);
router.get("/", warehouse.warehouse_get);

module.exports = router;
