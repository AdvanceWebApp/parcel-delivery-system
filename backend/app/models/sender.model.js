const mongoose = require("mongoose");

const Sender = mongoose.model(
  "Sender",
  new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    district: {
        type: String,
        required: true
      },
    county: {
        type: String,
        required: true
    },
    postCode: {
      type: String,
      required: true
    },
    unit: {
      type: String,
      required: true,
      enum: ["กรัม", "กิโลกรัม", "ตัน"],
      default: "กรัม",
    },
    city : {
      type: String,
      required: true,
      enum: ["กรุงเทพ", "กระบี่", "กาฬสิน"],
      default: "กรุงเทพ",
    },
    prefix : {
      type: String,
      required: true,
      enum: ["นาย", "นาง", "นางสาว","เด็กชาย","เด็กหญิง"],
      default: "นาย",
    },
  })
);

module.exports = Sender;