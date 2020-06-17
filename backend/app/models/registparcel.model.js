const mongoose = require("mongoose");

const Registparcel = mongoose.model(
  "Registparcel",
  new mongoose.Schema({
    state : {
      type: String,
      required: true,
      enum: ["ลงทะเบียนสำเร็จ", "กำลังจัดส่ง", "จัดส่งสำเร็จ","จัดส่งไม่สำเร็จ"],
      default: "ลงทะเบียนสำเร็จ",
    },
    recive: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "recives"
    },
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "senders"
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users"
    }
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