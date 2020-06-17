const config = require("../config/auth.config");
const db = require("../models");
const Sender = db.sender;

exports.getSenderId = (req, res) => {
    Sender.findById({
      _id: req.params._id
    })
      .exec((err, sender) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
  
        if (!sender) {
          return res.status(404).send({ message: "Sender Not found." });
        }
  
        res.status(200).send(sender);
      });
  };

exports.getSender = (req, res) => {
    Sender.find({})
      .exec((err, sender) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
  
        if (!sender) {
          return res.status(404).send({ message: "Sender Not found." });
        }
  
        res.status(200).send(sender);
      });
  };

exports.postSender = (req, res) => {
  const sender = new Sender({
        name: req.body.name,
        phone: req.body.phone,
        publicId: req.body.publicId,
        address: req.body.address,
        district: req.body.district,
        county: req.body.county,
        postCode: req.body.postCode,
        unit: req.body.unit,
        city: req.body.city,
        prefix: req.body.prefix
    })
    console.log(sender)
    sender.save((err, sender) => {
      console.log("seve")
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        if (!sender) {
            return res.status(404).send({ message: "Sender Not found." });
        }
        res.status(200).send(sender);
        console.log("seve")
    });
  };

  // USE BY USER, DELIVERY, REGISTERED
  // !! Pass
  // TODO: PUT BY USER_ID
exports.putSender = (req, res) => {
    Sender.findOneAndUpdate({
      _id: req.body._id
    },
      req.body
    )
      .exec((err, sender) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
  
        if (!sender) {
          return res.status(404).send({ message: "Sender Not found." });
        }
  
        res.status(200).send({ message: "sucessfully" });
      });
  };  

  // USE BY ADNIN
  // !! Pass
  // TODO: DELETE BY _ID
exports.deleteSenderById = (req, res) => {
    Sender.findOneAndDelete({
      _id: req.params._id
    })
      .exec((err, sender) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
  
        if (!sender) {
          return res.status(404).send({ message: "404 Not found." });
        }
        res.status(200).send(sender);
      });
};
