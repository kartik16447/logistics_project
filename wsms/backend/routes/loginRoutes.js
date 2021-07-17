const express = require("express");
const cors = require("cors");
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose =require('passport-local-mongoose');
const user = require("../models/warehouse");
const { isLoggedIn, isAuthor } = require("../authentication/middleware");

const router = express.Router();
router.use(cors());
// router.use(flash());

//Authentication Routes
router.get("/", (req, res) => {
  console.log(`login request received`);
});

router.post("/login", function(res,res){

    const user = new User({
        username:req.body.username,
        password:req.body.password
    });
    req.login(user, function(err) {
        if (err) { return next(err); }
        else{
            passport.authenticate("local")(req,res,function(){
                res.redirect("/")
            })
        }
      });
});

router.get("/logout", (req, res) => {
  console.log(`logout request received`);
  req.logout();
  req.flash("success", "Goodbye!");
  res.redirect("/");
});

module.exports = router;
