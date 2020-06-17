const mongoose = require("mongoose");

const Assignment = mongoose.model(
  "Assignment",
  new mongoose.Schema({
    startDate : {
      type: Date,
      required: true,
    },
    finshDate : {
        type: Date,
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

module.exports = Assignment;