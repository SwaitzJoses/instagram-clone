import mongoose from "mongoose";

const likeSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

const commentSchema = mongoose.Schema({
  comment: { type: String, required: true },

  // post: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Post" },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },

  name: {
    type: String,
  },

  createdAt: {
    type: "string",
    // default:Date.now(),
    // required: true,
  
  }
});

const postSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    // required: true,
    ref: "User",
  },

  name: {
    type: String,
  },

  image: {
    type: String,
    required: true,
  },
  like: [likeSchema],
  comment: [commentSchema],
});

const Post = mongoose.model("Post", postSchema);

export default Post;
