import express from "express"
import { createPost } from "../controller/randevu.js";
const router=express.Router();
router.post('/',createPost)
export default router