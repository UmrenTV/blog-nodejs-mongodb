const mongoose = require("mongoose");

// create schema

const categorySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide a user"],
    },
    title: {
      type: String,
      required: [true, "Please provide a title"],
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// Compile the category model

const Category = mongoose.model("Category", categorySchema);

// Export the category model

module.exports = Category;
