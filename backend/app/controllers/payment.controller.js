const config = require("../config/auth.config");
const db = require("../models");
const Payment = db.payment;
const Sender = db.sender;
const Recive = db.recive;
const User =db.user;


exports.getPaymentId = (req, res) => {
    Payment.findById({
      _id: req.params._id
    })
      .exec((err, payment) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
  
        if (!payment) {
          return res.status(404).send({ message: "Payment Not found." });
        }
        console.log(payment)
        res.status(200).send(payment);
      });
  };

exports.getPayment = (req, res) => {
    Payment.find({})
      .exec((err, payment) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
  
        if (!payment) {
          return res.status(404).send({ message: "Payment Not found." });
        }
  
        res.status(200).send(payment);
      });
  };

exports.postPayment = (req, res) => {
  const payment = new Payment({
        cost: req.body.cost,
        registparcel: req.body.registparcel,
        user: req.body.user
    })
    console.log(payment)
    payment.save((err, payment) => {
      console.log("seve")
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        if (!payment) {
            return res.status(404).send({ message: "Payment Not found." });
        }
        res.status(200).send(payment);
        console.log("seve")
    });
  };

  exports.putPayment = (req, res) => {
    Payment.findOneAndUpdate({
      _id: req.body._id
    },
      req.body
    )
      .exec((err, payment) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
        console.log(payment)
        if (!payment) {
          return res.status(404).send({ message: "Payment Not found." });
        }
        res.status(200).send({ message: "sucessfully" });
      });
  }; 

exports.deletePaymentById = (req, res) => {
    Payment.findOneAndDelete({
      _id: req.params._id
    })
      .exec((err, payment) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
  
        if (!payment) {
          return res.status(404).send({ message: "404 Not found." });
        }
        res.status(200).send(payment);
      });
};
