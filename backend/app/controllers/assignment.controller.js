const config = require("../config/auth.config");
const db = require("../models");
const Assignment = db.assignment;



exports.getAssignmentId = (req, res) => {
    Assignment.findById({
      _id: req.params._id
    })
      .exec((err, assignment) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
        console.log(assignment)
        if (!assignment) {
          return res.status(404).send({ message: "Assignment Not found." });
        }
        console.log(assignment)
        console.log("Hey")
        res.status(200).send(assignment);
      });
  };

exports.getAssignment = (req, res) => {
    Assignment.find({})
      .exec((err, assignment) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
  
        if (!assignment) {
          return res.status(404).send({ message: "Sender Not found." });
        }
  
        res.status(200).send(assignment);
      });
  };

exports.postAssignment = (req, res) => {
  const assignment = new Assignment({
        startDate: req.body.startDate,
        finshDate: req.body.finshDate,
        registparcel: req.body.registparcel,
        user: req.body.user
    })
    console.log(assignment)
    assignment.save((err, assignment) => {
      console.log("seve")
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        if (!assignment) {
            return res.status(404).send({ message: "Recive Not found." });
        }
        res.status(200).send(assignment);
        console.log("seve")
    });
  };

exports.putAssignment = (req, res) => {
    Assignment.findOneAndUpdate({
      _id: req.assignmentId
    },
      req.body
    )
      .exec((err, assignment) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
  
        if (!assignment) {
          return res.status(404).send({ message: "Sender Not found." });
        }
  
        res.status(200).send({ message: "sucessfully" });
      });
  };  

exports.deleteAssignmentById = (req, res) => {
    Assignment.findOneAndDelete({
      _id: req.params._id
    })
      .exec((err, assignment) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
  
        if (!assignment) {
          return res.status(404).send({ message: "404 Not found." });
        }
        res.status(200).send(assignment);
      });
};
