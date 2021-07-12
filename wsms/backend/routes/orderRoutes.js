var express = require("express");
const cors = require("cors");

const order = require("../controllers/createOrder");

const router = express.Router();
router.use(cors());

router.post("/", order.create);
router.get("/", order.get);
router.delete("/", order.order_delete);

module.exports = router;
