const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const User = db.user;
const Role = db.role;

verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Unauthorized!" });
    }
    req.userId = decoded.id;
    console.log();
    
    next();
  });
};

isAdmin = (req, res, next) => {
  User.findById(req.userId).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    Role.findOne(
      {
        _id: user.roles
      },
      (err, roles) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }

        if (roles.name === "admin") {
          next();
          return;
        }

        res.status(403).send({ message: "Require Admin Role!" });
        return;
      }
    );
  });
};

//!! Pass
isRegisteredStaff = (req, res, next) => {
  User.findById(req.userId).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    Role.findOne(
      {
        _id: user.roles
      },
      (err, roles) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }

        if (roles.name === "registered_staff") {
          next();
          return;
        }

        res.status(403).send({ message: "Require RegisteredStaff Role!" });
        return;
      }
    );
  });
};

// !! Pass
isDeliveryStaff = (req, res, next) => {
  User.findById(req.userId).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    Role.findOne(
      {
        _id: user.roles
      },
      (err, roles) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }

        if (roles.name === "delivery_staff") {
          next();
          return;
        }

        res.status(403).send({ message: "Require DeliveryStaff Role!" });
        return;
      }
    );
  });
};

// !! Pass
isUser = (req, res, next) => {
  User.findById(req.userId).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    Role.findOne(
      {
        _id: user.roles
      },
      (err, roles) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }

        if (roles.name === "user") {
          next();
          return;
        }

        res.status(403).send({ message: "Require User Role!" });
        return;
      }
    );
  });
};

const authJwt = {
  verifyToken,
  isAdmin,
  isDeliveryStaff,
  isRegisteredStaff,
  isUser
};
module.exports = authJwt;