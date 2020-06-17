const config = require("../config/auth.config");
const db = require("../models");
const Registparcel = db.registparcel;
const Sender = db.sender;
const Recive = db.recive;
const User =db.user;


exports.getRegistparcelId = (req, res) => {
    Registparcel.findById({
      _id: req.params._id
    })
      .exec((err, registparcel) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
  
        if (!registparcel) {
          return res.status(404).send({ message: "Sender Not found." });
        }
  
        res.status(200).send(registparcel);
      });
  };

exports.getRegistparcel = (req, res) => {
    Registparcel.find({})
      .exec((err, registparcel) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
  
        if (!registparcel) {
          return res.status(404).send({ message: "Sender Not found." });
        }
  
        res.status(200).send(registparcel);
      });
  };

exports.postRegistparcel = (req, res) => {
  const registparcel = new Registparcel({
        state: req.body.state,
        recive: req.body.recive,
        sender: req.body.sender,
        user: req.body.user
    })
    console.log(registparcel)
    registparcel.save((err, registparcel) => {
      console.log("seve")
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        if (!registparcel) {
            return res.status(404).send({ message: "Recive Not found." });
        }
        res.status(200).send(registparcel);
        console.log("seve")
    });
  };

exports.putRegistparcel = (req, res) => {
    Registparcel.findOneAndUpdate({
      _id: req.body._id
    },
      req.body
    )
      .exec((err, registparcel) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
  
        if (!registparcel) {
          return res.status(404).send({ message: "Sender Not found." });
        }
  
        res.status(200).send({ message: "sucessfully" });
      });
  };  

exports.deleteRegistparcelById = (req, res) => {
    Registparcel.findOneAndDelete({
      _id: req.params._id
    })
      .exec((err, registparcel) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
  
        if (!registparcel) {
          return res.status(404).send({ message: "404 Not found." });
        }
        res.status(200).send(registparcel);
      });
};
