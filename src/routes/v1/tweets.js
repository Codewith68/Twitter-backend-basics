import express from 'express';
import {getTweetId,getTweets,createTweet,updateTweet, deletTweetById} from '../../controllers/tweetController.js';
import {tweetZodSchema} from '../../validators/tweetZodSchema.js';
import { validate } from '../../validators/zodValidator.js';

const router = express.Router(); // create a new router object
router.get('/',getTweets);

router.get('/:id',getTweetId);

router.post('/',validate(tweetZodSchema),createTweet);

router.delete('/:id',deletTweetById)
router.put('/:id',updateTweet)


export default router; // export the router object