const express = require("express");
const cors = require("cors");

const debug = require("../controllers/debugController");

const router = express.Router();
router.use(cors());

router.post("/", debug.create_post);
router.get("/", debug.get);
router.delete("/", debug._delete);

module.exports = router;
