const mongoose = require("mongoose");

// create schema

const commentSchema = new mongoose.Schema(
  {
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
      required: [true, "Please provide a post"],
    },
    user: {
      type: Object,
      required: [true, "Please provide a user"],
    },
    description: {
      type: String,
      required: [true, "Please provide a description"],
    },
  },
  {
    timestamps: true,
  }
);

// Compile the comment model

const Comment = mongoose.model("Comment", commentSchema);

// Export the comment model

module.exports = Comment;
