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
        nameS: req.body.nameS,
        phoneS: req.body.phoneS,
        publicIdS:  req.body.publicIdS,
        addressS: req.body.addressS,
        weigthS:req.body.weigthS,
        districtS: req.body.districtS,
        countyS:req.body.countyS,
        postCodeS:req.body.postCodeS,
        unitS:req.body.unitS,
        cityS :req.body.cityS,
        prefixS :req.body.prefixS,
        nameR:req.body.nameR,
        phoneR:req.body.phoneR,
        addressR:req.body.addressR,
        districtR:req.body.districtR,
        countyR:req.body.countyR,
        postCodeR:req.body.postCodeR,
        cityR :req.body.cityR,
        prefixR :req.body.prefixR,

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
