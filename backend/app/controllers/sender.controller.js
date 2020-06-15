const db = require("../models");
const Sender = db.sender



exports.getSenderId = (req, res) => {
    Sender.findOne({
      _id: req.Sender
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
    var sender = new sender({
        name: req.body.name,
        phone: req.body.phone,
        publicId: req.body.publicId,
        address: req.body.address,
        district: req.body.district,
        county: req.body.county
    })
    register.save((err, sender) => {
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

  // USE BY USER, DELIVERY, REGISTERED
  // !! Pass
  // TODO: PUT BY USER_ID
exports.putSender = (req, res) => {
    Sender.findOneAndUpdate({
      _id: req.senderId
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
    User.findOneAndDelete({
      _id: req.params._id
    })
      .exec((err, user) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
  
        if (!user) {
          return res.status(404).send({ message: "404 Not found." });
        }
        res.status(200).send(user);
      });
  };
