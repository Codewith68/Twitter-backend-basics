import express from 'express';
import {getTweetId,getTweets,createTweet} from '../../controllers/tweetController.js';

const router = express.Router(); // create a new router object
router.get('/',getTweets);

router.get('/:id',getTweetId);

router.post('/',createTweet);


export default router; // export the router object