import express from "express";
const router = express.Router();
import {createPost, getPost, createComment, deleteComment} from '../controller/postController.js'
import {protect} from "../middleware/authMiddleware.js";

router.route("/create").post(protect, createPost)
router.route("/allposts").get(getPost)
router.route("/comment").post(protect, createComment).delete(protect, deleteComment)


export default router; 