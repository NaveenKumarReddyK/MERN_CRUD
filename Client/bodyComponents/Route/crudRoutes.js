const express = require("express");
const crudRoute = express.Router();
const crudSchema = require("../Model/curdModel");

//insert into database
crudRoute.route("/create").post(function (req, res) {
  let crudInsertData = new crudSchema(req.body);
  crudInsertData
    .save()
    .then(function (data) {
      res.json({ crudData: "Added succesfuly" });
      console.log("Created sucessfuly")
    })
    .catch(function (err) {
      res.status(404).send("Unable to write into database");
      console.log("Unable to ceate data")
    });
});

//read all from database
crudRoute.route("/readAll").get(function (req, res) {
  crudSchema.find(function (err, resData) {
    if (err) {
      res.status(404).send("Unable to retrieve the data");
    } else {
      res.json(resData);
    }
  });
});

//read by id(Object_Id())
crudRoute.route("/editById/:id").get(function (req, res) {
  let reqId = req.params.id;
  crudSchema.findById(reqId, function (err, resData) {
    if (err) {
      res.status(404).send("Unable to fetch the data");
    } else {
      // if (resData == "") {
      //   res.send("This id doesn't exist");
      // } else {
        res.json(resData);
        console.log(resData);
      // }
    }
  });
});

//update data by using id(Object_Id)
crudRoute.route("/update/:id").put(function (req, res) {
  crudSchema.findByIdAndUpdate(req.params.id, { $set: req.body }, function (
    err,
    crudUpdatedData
  ) {
    if (err) {
      res
        .status(404)
        .send("Unable to find the document with id" + req.params.id);
    } else {
      res.json(crudUpdatedData);
    }
  });
});

//delete document based in id(Obkect_Id)

crudRoute.route("/delete/:id").delete(function (req, res) {
  crudSchema.findByIdAndDelete({ _id: req.params.id }, function (err, resData) {
    if (err) {
      res.status(404).send("Unable to delete");
    } else {
      res.send("Sucessfulu deleted document ");
    }
  });
});

module.exports = crudRoute;
