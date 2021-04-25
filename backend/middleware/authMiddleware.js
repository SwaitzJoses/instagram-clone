import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import Post from "../models/postModel.js";
import asyncHandler from "express-async-handler";
import colors from "colors";

const protect = asyncHandler(async (req, res, next) => {
  let token;
  console.log(req.headers.authorization);
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log(decoded);

      req.user = await User.findById(decoded.id).select("-password");
      console.log(req.user);

      // req.post = await Post.find({})

      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error("Not authorized , token failed"); 
    }
  }
});





export  {protect} 