const mongoose = require("mongoose");

const Recive = mongoose.model(
  "Recive",
  new mongoose.Schema({
    nameR: {
      type: String,
      required: true
    },
    phoneR: {
      type: String,
      required: true
    },
    addressR: {
      type: String,
      required: true
    },
    districtR: {
        type: String,
        required: true
      },
    countyR: {
        type: String,
        required: true
    },
    postCodeR: {
      type: String,
      required: true
    },
    cityR : {
      type: String,
      required: true,
      enum: ["กรุงเทพ", "กระบี่", "กาฬสิน"],
      default: "กรุงเทพ",
    },
    prefixR : {
      type: String,
      required: true,
      enum: ["นาย", "นาง", "นางสาว","เด็กชาย","เด็กหญิง"],
      default: "นาย",
    },
  })
);

module.exports = Recive;