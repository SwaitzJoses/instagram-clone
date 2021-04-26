import asyncHandler from "express-async-handler";
import Post from "../models/postModel.js";

// desc: create post
//Route : POST localhost/5000/post/create
//access: Protect
const createPost = asyncHandler(async (req, res) => {
  const { image } = req.body;
  const post = await Post.create({
    image,
    user: req.user._id,
    name: req.user.name,
  });
  res.status(200).json({
    _id: post._id,
    user: req.user._id,
    name: req.user.name,
    image: post.image,
    like: post.like,
    comment: post.comment,
  });
});

// desc: get  post
//Route : GET localhost/5000/posts/allposts
//access: Protect
const getPost = asyncHandler(async (req, res) => {
  const postGet = await Post.find({});
  res.status(200).json({
    ...postGet,
  });
});

// @desc    add Comment
//Route : POST localhost/5000/post/comment
// @access  Private
const createComment = asyncHandler(async (req, res) => {
  const { comment } = req.body;

  const post = await Post.findById("6085b7aa80ce9712a00d46e3");

  const postComment = {
    name: req.user.name,
    comment,
    user: req.user._id,
    createdAt: Date.now(),
    // post:req.post._id,
  };

  post.comment.push(postComment);

  await post.save();
  res.status(201).json({ message: "Comment added" });
});


// @desc    delete Comment
//Route : POST localhost/5000/post/comment
// @access  Private
const deleteComment = asyncHandler(async (req, res) => {
    
  
    const post = await Post.findById("6085b7aa80ce9712a00d46e3");
        //   post.comment.remove("6084bb28ed407260b8630db3")
    
  //  console.log(post)
      const filtered = post.comment.filter(c=> c._id != "6085c206d481aa648c688f1a");
      console.log((filtered))
     post.comment.pop(filtered);
     
  
    await post.save();
    res.status(201).json({ post });
  });


  // @desc    add Like
//Route : PUT localhost/5000/post/like
// @access  Private
const createLike = asyncHandler(async (req, res) => {
  

  const post = await Post.findById("6085b7aa80ce9712a00d46e3");

  const postLike = {
    name: req.user.name,
  
    user: req.user._id,
    // createdAt: Date.now(),
    // post:req.post._id,
  };

  post.like.push(postLike);

  await post.save();
  res.status(201).json({ message: "Like added" });
});


// @desc    delete Like
//Route : DELETE localhost/5000/post/like
// @access  Private
const deleteLike = asyncHandler(async (req, res) => {
    
  
  const post = await Post.findById("6085b7aa80ce9712a00d46e3");
      //   post.comment.remove("6084bb28ed407260b8630db3")
  
//  console.log(post)
    const filtered = post.like.filter(c=> c._id != "608609d0e4c3882b84101b82");
    // console.log((filtered))
   post.like.pop(filtered);
   

  await post.save();
  res.status(201).json({ post });
});

export { createPost, getPost, createComment, deleteComment, createLike, deleteLike };
