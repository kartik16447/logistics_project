const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const orderRoutes = require("./routes/orderRoutes");
const vendorRoutes = require("./routes/vendorRoutes");
const warehouseRoutes = require("./routes/warehouseRoutes");

const app = express();

//using body-parsers

// parse application/json
app.use(bodyParser.json()); //using json requests through insomnia/postman

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse the raw data
app.use(bodyParser.raw());
// parse text
app.use(bodyParser.text());

/*
empty req.body issue faced because the content type was not specified
*/

//Connecting to wsms database in localhost
const dbURI = "mongodb://127.0.0.1:27017/wsms";
//Port 3000 and 5000 are fine for development purposes
const port = process.env.PORT || 3000;

//TODO: Connect the env file without declaring the script as module

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    app.listen(port);
    console.log(`listening on port ${port}`);
  })
  .catch((err) => console.log(err));

//Homepage Get Function
app.get("/", (req, res, next) => {
  console.log(`request made for home page`);
  next();
});

//Directing respective routes-files
app.use("/order", orderRoutes);
app.use("/vendor", vendorRoutes);
app.use("/warehouse", warehouseRoutes);
