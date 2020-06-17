const mongoose = require("mongoose");

const Sender = mongoose.model(
  "Sender",
  new mongoose.Schema({
    names: {
      type: String,
      required: true
    },
    phones: {
      type: String,
      required: true
    },
    addressS: {
      type: String,
      required: true
    },
    publicIdS:{
      type: String,
      required: true
    },
    districts: {
        type: String,
        required: true
      },
    countys: {
        type: String,
        required: true
    },
    postCodes: {
      type: String,
      required: true
    },
    units: {
      type: String,
      required: true,
      enum: ["กรัม", "กิโลกรัม", "ตัน"],
      default: "กรัม",
    },
    citys : {
      type: String,
      required: true,
      enum: ["กรุงเทพ", "กระบี่", "กาฬสิน"],
      default: "กรุงเทพ",
    },
    prefixs : {
      type: String,
      required: true,
      enum: ["นาย", "นาง", "นางสาว","เด็กชาย","เด็กหญิง"],
      default: "นาย",
    },
  })
);

module.exports = Sender;