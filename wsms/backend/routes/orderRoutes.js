const express = require("express");
const order = require("../controllers/createOrder");

const router = express.Router();

router.post("/", order.create);
router.get("/", order.get);

module.exports = router;
