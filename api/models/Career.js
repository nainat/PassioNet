const mongoose = require("mongoose");

const CareerSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      max: 100,
    },
    description: {
      type: String,
      max: 500,
    },
    category: {
      type: String,
      enum: ["Music", "Art", "Dance", "Acting"],
      required: true,
    },
    registeredUsers: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Career", CareerSchema);
