const db = require("../models");
const User = db.user;
const Role = db.role;

// USE BY USER, DELIVERY, REGISTERED
// !! pass
// TODO : GET DATA USER 
exports.getUser = (req, res) => {
  User.findOne({
    _id: req.userId
  })
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      res.status(200).send(user);
    });
};


// USE BY ADMIN
// !! Pass
// TODO : GET STAFF ALL BY ADMIN 
exports.getStaffAllByAdmin = (req, res) => {
  Role.find({})
    .exec((err, role) => {
      console.log(role[0].id);

      User.find({
        roles: { $in: [role[1].id, role[2].id] }
      })
        .exec((err, user) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }

          if (!user) {
            return res.status(404).send({ message: "User Not found." });
          }

          res.status(200).send(user);
        });
    })
};

// USE BY REGISTERED
// !! Pass
// TODO : GET DELIVERY ALL BY REGISTERED 
exports.getDeliveryAllByRegistered = (req, res) => {
  Role.find({})
    .exec((err, role) => {
      console.log(role[0].id);

      User.find({
          roles: { $in: [role[1].id]}
      })
        .exec((err, user) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }

          if (!user) {
            return res.status(404).send({ message: "User Not found." });
          }

          res.status(200).send(user);
        });
    })
};

// USE BY ADMIN
// !! Pass
// TODO : GET USER ALL BY ADMIN 
exports.getUserAllByAdmin = (req, res) => {
  Role.find({})
    .exec((err, role) => {
      console.log(role[0].id);

      User.find({
          roles: { $in: [role[0].id]}
      })
        .exec((err, user) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }

          if (!user) {
            return res.status(404).send({ message: "User Not found." });
          }

          res.status(200).send(user);
        });
    })
};


// USE BY USER, DELIVERY, REGISTERED
// !! Pass
// TODO: PUT BY USER_ID
exports.putUser = (req, res) => {
  User.findOneAndUpdate({
    _id: req.userId
  },
    req.body
  )
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }
      res.status(200).send({ message: "sucessfully" });
    });
};


// USE BY ADNIN
// !! Pass
// TODO: PUT BY _ID
exports.putById = (req, res) => {
  User.findOneAndUpdate({
    _id: req.params._id
  },
    req.body
  )
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      res.status(200).send({ message: "sucessfully" });
    });
};


// USE BY ADNIN
// !! Pass
// TODO: DELETE BY _ID
exports.deleteUserById = (req, res) => {
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