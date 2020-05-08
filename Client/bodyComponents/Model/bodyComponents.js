const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let crudSchema = new Schema(
  {
    fname: {
      type: String,
    },
    lname: {
      type: String,
    },
    age: {
      type: Number,
    },
    gender: {
      type: String,
    },
  },
  {
    collection: "crudCollection",
  }
);

module.exports = mongoose.model("crudSchema", crudSchema);
