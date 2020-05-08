const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
var url = "mongodb://localhost:27017/crudDatabase";
const crudRoute = require("./Route/crudRoutes");


const app = express();
mongoose.Promise = global.Promise;
mongoose
  .connect(url, { useNewUrlParser: true ,useUnifiedTopology: true})
  .then(() => {console.log("Succesfuly connected to the database")})
  .catch((err) => {console.log("Unable to connect to the dataabse")});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/crud", crudRoute);

const port = process.env.PORT || 4000;

app.listen(port, function (err) {
  if (err) {
    console.log("Unable to connect to the port");
  } else {
    console.log("Succesfuly connected to the port " + port);
  }
});
