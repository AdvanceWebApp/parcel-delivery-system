const mongoose = require("mongoose");

const Registparcel = mongoose.model(
  "Registparcel",
  new mongoose.Schema({
    state : {
      type: String,
      required: true,
      // enum: ["ลงทะเบียนสำเร็จ", "กำลังจัดส่ง", "จัดส่งสำเร็จ","จัดส่งไม่สำเร็จ"],
      // default: "ลงทะเบียนสำเร็จ",
    },
    nameS: {
      type: String,
      required: true
    },
    phoneS: {
      type: String,
      required: true
    },
    publicIdS:{
      type: String,
      required: true
    },
    addressS: {
      type: String,
      required: true
    },
    weigthS:{
      type: Number,
      required: true
    },
    districtS: {
        type: String,
        required: true
      },
    countyS: {
        type: String,
        required: true
    },
    postCodeS: {
      type: String,
      required: true
    },
    unitS: {
      type: String,
      required: true,
      // enum: ["กรัม", "กิโลกรัม", "ตัน"],
      // default: "กรัม",
    },
    cityS : {
      type: String,
      required: true,
      // enum: ["กรุงเทพ", "กระบี่", "กาฬสิน"],
      // default: "กรุงเทพ",
    },
    prefixS : {
      type: String,
      required: true,
      // enum: ["นาย", "นาง", "นางสาว","เด็กชาย","เด็กหญิง"],
      // default: "นาย",
    },
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
      // enum: ["กรุงเทพ", "กระบี่", "กาฬสิน"],
      // default: "กรุงเทพ",
    },
    prefixR : {
      type: String,
      required: true,
      // enum: ["นาย", "นาง", "นางสาว","เด็กชาย","เด็กหญิง"],
      // default: "นาย",
    },
  },
    {
      timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
      }
    }
  )
);

module.exports = Registparcel;