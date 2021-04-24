import mongoose from "mongoose";

const likeSchema = mongoose.Schema(
    {
     
      user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
      },
    },
    
  );


const commentSchema = mongoose.Schema(
    {
      name: { type: String, required: true },
     
      comment: { type: String, required: true },
  
      user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
      },
    },
    {
      createdAt: Date.now,
    }
  );

const postSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },

    
    image: {
      type: String,
      required: true,
    },
    like:[likeSchema],
    comment:[commentSchema],
}
);

const Post = mongoose.model("Post", postSchema);

export default Post;
