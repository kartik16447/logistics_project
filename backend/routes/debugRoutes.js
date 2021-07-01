const express = require("express");
const debug = require("../controllers/debugController");

const router = express.Router();

router.post("/", debug.debug_create_post);
router.get("/", debug.debug_get);

module.exports = router;
