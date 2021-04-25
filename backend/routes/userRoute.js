import express from "express";
const router = express.Router();
import {createUser} from '../controller/userController.js'
import {protect} from "../middleware/authMiddleware.js";

router.route("/create").post(createUser)

export default router;