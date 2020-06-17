const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
const db = {};

db.mongoose = mongoose;

db.role = require("./role.model");
db.user = require("./user.model");
db.sender = require("./sender.model");
db.recive = require("./recive.model");
db.registparcel = require("./registparcel.model");
db.payment = require("./payment.model");
db.assignment = require("./assignment.model");

db.ROLES = ["user", "admin", "delivery_staff", "registered_staff"];

module.exports = db;