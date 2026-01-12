import express from 'express';
import tweetsRouter from './tweets.js';
import commentsRouter from './comments.js';


const router = express.Router(); // create a new router object


router.use('/tweets',tweetsRouter)
router.use('/comments',commentsRouter)

export default router;
