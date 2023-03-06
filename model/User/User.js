const mongoose = require("mongoose");

// create schema
const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "Please provide your first name"],
    },
    lastname: {
      type: String,
      required: [true, "Please provide your last name"],
    },
    profilePhoto: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "Please provide your email"],
    },
    password: {
      type: String,
      required: [true, "Please provide your password"],
    },
    postCount: {
      type: Number,
      default: 0,
    },
    isBlocked: {
      type: Boolean,
      default: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      enum: ["Guest", "Admin", "Editor"],
    },
    viewedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    followers: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    following: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    active: {
      type: Boolean,
      default: true,
    },
    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
  },
  {
    timestamps: true,
  }
);

// Compile the user model

const User = mongoose.model("User", userSchema);

// Export the user model

module.exports = User;
