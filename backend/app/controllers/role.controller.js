const db = require("../models");
const Role = db.role;


exports.getRole = (req, res) => {
    Role.find({})
      .exec((err, Role) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
  
        if (!Role) {
          return res.status(404).send({ message: "Sender Not found." });
        }
  
        res.status(200).send(Role);
      });
  };