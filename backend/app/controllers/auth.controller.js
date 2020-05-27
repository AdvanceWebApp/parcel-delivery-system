const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;
const Role = db.role;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");


// TODO : SIGNUP
exports.signup = (req, res) => {
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
  });


  switch (req.body.roles) {


    case "delivery_staff":
    // !! DELIVERY STAFF
    //console.log('test');
    try {
      deliveryStaff.save((err, deliveryStaff) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }

        if (req.body.roles) {
          Role.find(
            {
              name: { $in: req.body.roles }
            },
            (err, roles) => {
              if (err) {
                res.status(500).send({ message: err });
                return;
              }

              deliveryStaff.roles = roles.map(role => role._id);
              deliveryStaff.save(err => {
                if (err) {
                  res.status(500).send({ message: err });
                  return;
                }

                res.send({ message: "deliveryStaff was registered successfully!" });
              });
            }
          );
        } else {
          Role.findOne({ name: "deliveryStaff" }, (err, role) => {
            if (err) {
              res.status(500).send({ message: err });
              return;
            }

            deliveryStaff.roles = [role._id];
            deliveryStaff.save(err => {
              if (err) {
                res.status(500).send({ message: err });
                return;
              }

              res.send({ message: "deliveryStaff was registered successfully!" });
            });
          });
        }
      });
    } catch (error) {
      res.status(500).send({ message: error });
      return;
    }
    break;


    case "registered_staff":
      // !! REGISTERED STAFF
      //console.log('test');
      try {
        registeredStaff.save((err, registeredStaff) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }

          if (req.body.roles) {
            Role.find(
              {
                name: { $in: req.body.roles }
              },
              (err, roles) => {
                if (err) {
                  res.status(500).send({ message: err });
                  return;
                }

                registeredStaff.roles = roles.map(role => role._id);
                registeredStaff.save(err => {
                  if (err) {
                    res.status(500).send({ message: err });
                    return;
                  }

                  res.send({ message: "RegisteredStaff was registered successfully!" });
                });
              }
            );
          } else {
            Role.findOne({ name: "registeredStaff" }, (err, role) => {
              if (err) {
                res.status(500).send({ message: err });
                return;
              }

              registeredStaff.roles = [role._id];
              registeredStaff.save(err => {
                if (err) {
                  res.status(500).send({ message: err });
                  return;
                }

                res.send({ message: "RegisteredStaff was registered successfully!" });
              });
            });
          }
        });
      } catch (error) {
        res.status(500).send({ message: error });
        return;
      }
     break;


    case "admin":
      // !! ADMIN
      //console.log('test');
      try {
        admin.save((err, admin) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }

          if (req.body.roles) {
            Role.find(
              {
                name: { $in: req.body.roles }
              },
              (err, roles) => {
                if (err) {
                  res.status(500).send({ message: err });
                  return;
                }

                admin.roles = roles.map(role => role._id);
                admin.save(err => {
                  if (err) {
                    res.status(500).send({ message: err });
                    return;
                  }

                  res.send({ message: "Admin was registered successfully!" });
                });
              }
            );
          } else {
            Role.findOne({ name: "admin" }, (err, role) => {
              if (err) {
                res.status(500).send({ message: err });
                return;
              }

              admin.roles = [role._id];
              admin.save(err => {
                if (err) {
                  res.status(500).send({ message: err });
                  return;
                }

                res.send({ message: "Admin was registered successfully!" });
              });
            });
          }
        });
      } catch (error) {
        res.status(500).send({ message: error });
        return;
      }
      break;


    default:
      // !! USER
     // console.log('test');
      try {
        user.save((err, user) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }

          if (req.body.roles) {
            Role.find(
              {
                name: { $in: req.body.roles }
              },
              (err, roles) => {
                if (err) {
                  res.status(500).send({ message: err });
                  return;
                }

                user.roles = roles.map(role => role._id);
                user.save(err => {
                  if (err) {
                    res.status(500).send({ message: err });
                    return;
                  }

                  res.send({ message: "User was registered successfully!" });
                });
              }
            );
          } else {
            Role.findOne({ name: "user" }, (err, role) => {
              if (err) {
                res.status(500).send({ message: err });
                return;
              }

              user.roles = [role._id];
              user.save(err => {
                if (err) {
                  res.status(500).send({ message: err });
                  return;
                }

                res.send({ message: "User was registered successfully!" });
              });
            });
          }
        });
      } catch (error) {
        res.status(500).send({ message: error });
        return;
      }
      break;
  }
}

// TODO : SIGNIN
// USER

// !! Pas
exports.signinUser = (req, res) => {
  User.findOne({
    username: req.body.username
  })
    .populate("roles", "-__v")
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

      var authorities = "ROLE_" + user.roles.name.toUpperCase()
      res.status(200).send({
        _id: user._id,
        username: user.username,
        email: user.email,
        role: authorities,
        accessToken: token
      });

    });
};


// // TEACHER
// exports.signinTeacher = (req, res) => {
//   Teacher.findOne({
//     username: req.body.username
//   })
//     .populate("roles", "-__v")
//     .exec((err, teacher) => {
//       if (err) {
//         res.status(500).send({ message: err });
//         return;
//       }

//       if (!teacher) {
//         return res.status(404).send({ message: "Teacher Not found." });
//       }

//       var passwordIsValid = bcrypt.compareSync(
//         req.body.password,
//         teacher.password
//       );

//       if (!passwordIsValid) {
//         return res.status(401).send({
//           accessToken: null,
//           message: "Invalid Password!"
//         });
//       }

//       var token = jwt.sign({ id: teacher.id }, config.secret, {
//         expiresIn: 86400 // 24 hours
//       });

//       var authorities = [];

//       for (let i = 0; i < teacher.roles.length; i++) {
//         authorities.push("ROLE_" + teacher.roles[i].name.toUpperCase());
//       }
//       res.status(200).send({
//         id: teacher._id,
//         username: teacher.username,
//         email: teacher.email,
//         accessToken: token
//       });
//     });
// };
// // ADMIN
// exports.signinAdmin = (req, res) => {
//   Admin.findOne({
//     username: req.body.username
//   })
//     .populate("roles", "-__v")
//     .exec((err, admin) => {
//       if (err) {
//         res.status(500).send({ message: err });
//         return;
//       }

//       if (!admin) {
//         return res.status(404).send({ message: "Admin Not found." });
//       }

//       var passwordIsValid = bcrypt.compareSync(
//         req.body.password,
//         admin.password
//       );

//       if (!passwordIsValid) {
//         return res.status(401).send({
//           accessToken: null,
//           message: "Invalid Password!"
//         });
//       }

//       var token = jwt.sign({ id: admin.id }, config.secret, {
//         expiresIn: 86400 // 24 hours
//       });

//       var authorities = [];

//       for (let i = 0; i < admin.roles.length; i++) {
//         authorities.push("ROLE_" + admin.roles[i].name.toUpperCase());
//       }
//       res.status(200).send({
//         id: admin._id,
//         username: admin.username,
//         email: admin.email,
//         accessToken: token
//       });
//     });
// };

