import express from 'express';
import tweetsRouter from './tweets.js';
import commentsRouter from './comments.js';
import upload from "../../middleware/multer.js";
import { uploadImage } from "../../controllers/uploadController.js";



const router = express.Router(); // create a new router object


router.use('/tweets',tweetsRouter)
router.use('/comments',commentsRouter)
router.post("/upload", upload.single("image"), uploadImage);

export default router;
