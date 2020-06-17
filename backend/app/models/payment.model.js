const mongoose = require("mongoose");

const Payment = mongoose.model(
  "Payment",
  new mongoose.Schema({
    cost : {
      type: Number,
      required: true,
    },
    registparcel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "registparcels"
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

module.exports = Payment;