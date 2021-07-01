const express = require("express");
const debug = require("../controllers/debugController");

const router = express.Router();

router.post("/", debug.create_post);
router.get("/", debug.get);
router.delete("/", debug._delete);

module.exports = router;
