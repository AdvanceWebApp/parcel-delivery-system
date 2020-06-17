const config = require("../config/auth.config");
const db = require("../models");
const Recive = db.recive;

exports.getReciveId = (req, res) => {
    Recive.findById({
      _id: req.params._id
    })
      .exec((err, recive) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
  
        if (!recive) {
          return res.status(404).send({ message: "Recive Not found." });
        }
  
        res.status(200).send(recive);
      });
  };

exports.getRecive = (req, res) => {
    Recive.find({})
      .exec((err, recive) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
  
        if (!recive) {
          return res.status(404).send({ message: "Recive Not found." });
        }
  
        res.status(200).send(recive);
      });
  };

exports.postRecive = (req, res) => {
  const recive = new Recive({
        name: req.body.name,
        phone: req.body.phone,
        address: req.body.address,
        district: req.body.district,
        county: req.body.county,
        postCode: req.body.postCode,
        city: req.body.city,
        prefix: req.body.prefix
    })
    console.log(recive)
    recive.save((err, recive) => {
      console.log("seve")
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        if (!recive) {
            return res.status(404).send({ message: "Recive Not found." });
        }
        res.status(200).send(recive);
        console.log("seve")
    });
  };

exports.putRecive = (req, res) => {
    Recive.findOneAndUpdate({
      _id: req.body._id
    },
      req.body
    )
      .exec((err, recive) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
  
        if (!recive) {
          return res.status(404).send({ message: "Recive Not found." });
        }
  
        res.status(200).send({ message: "sucessfully" });
      });
  };  

exports.deleteReciveById = (req, res) => {
    Recive.findOneAndDelete({
      _id: req.params._id
    })
      .exec((err, recive) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
  
        if (!recive) {
          return res.status(404).send({ message: "404 Not found." });
        }
        res.status(200).send(recive);
      });
};
