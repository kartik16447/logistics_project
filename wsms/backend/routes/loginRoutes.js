const express = require("express");
const cors = require("cors");
const passport = require("passport");
const user = require("../models/warehouse");
const { isLoggedIn, isAuthor } = require("../authentication/middleware");

const router = express.Router();
router.use(cors());
// router.use(flash());

//Authentication Routes
router.get("/", (req, res) => {
  console.log(`login request received`);
});

router.post(
  "/",
  passport.authenticate(
    "local",
    {
      // failureFlash: true,
      failureRedirect: "/",
    },
    console.log("post request for login")
  ),
  (req, res) => {
    `login request received: ${req.body.username} " " ${req.body.password}`;
    // req.flash("success", "welcome back!");
    const redirectUrl = req.session.returnTo || "/";
    delete req.session.returnTo;
    res.redirect(redirectUrl);
  }
);

router.get("/logout", (req, res) => {
  console.log(`logout request received`);
  req.logout();
  req.flash("success", "Goodbye!");
  res.redirect("/");
});

module.exports = router;
