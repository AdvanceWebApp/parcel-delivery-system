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
    publicId: {
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
    }
  })
);

module.exports = Sender;