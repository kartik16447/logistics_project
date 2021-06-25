const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Items will act as a Sub Schema for Orders
const itemSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    unit: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
    },
  },
  { _id: false }
);

const Item = mongoose.model("Item", itemSchema);
module.exports = Item;
