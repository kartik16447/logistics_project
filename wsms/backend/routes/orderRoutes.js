var express = require("express");
const cors = require("cors");

const order = require("../controllers/createOrder");
const { isLoggedIn, isAuthor } = require("../authentication/middleware");

const router = express.Router();
router.use(cors());

router.post("/", order.create);
router.get("/", order.get);
router.delete("/", order._delete);
router.patch("/status", order.update);

module.exports = router;
