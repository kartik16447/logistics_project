const express = require("express");
const order = require("../controllers/createOrder");

const router = express.Router();

router.post("/", order.create);
router.get("/", order.get);
router.delete("/", order.order_delete);

module.exports = router;
