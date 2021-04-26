import express from "express";
const router = express.Router();
import {createPost, getPost, createComment, deleteComment, createLike, deleteLike} from '../controller/postController.js'
import {protect} from "../middleware/authMiddleware.js";

router.route("/create").post(protect, createPost)
router.route("/allposts").get(getPost)
router.route("/:post").post(protect, createComment)
router.route("/:post/:comment").delete(protect, deleteComment)

router.route("/like").put(protect, createLike).delete(protect, deleteLike)

export default router; 