import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

// desc: create user
//Route : POST localhost/5000/create
//access: Public
const createUser = asyncHandler(async (req, res) => {
    const {name, password, email} = req.body;
    const user = await User.create({
      name,
      password,
      email
    })
    res.json({
      _id: user._id,
      name: user.name,
      email:user.email,
      password:user.password,
      following:user.following,
      follower:user.follower,
      
      
      token: generateToken(user._id, user.name),
    })
});




export {createUser};

