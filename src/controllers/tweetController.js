import { success } from "zod";
import { createTweet as createTweetService   } from "../service/tweetService.js";

export const getTweets = (req, res) => {
    return res.json({
        message: 'tweets from v1'
    });
};
export const getTweetId = (req, res) => {
    const { id } = req.params;
    return res.json({
        message: `tweet from v1 id ${id}`
    });
};
export const createTweet = async (req, res) => {
  try {
    console.log("REQ BODY:", req.body);

    const response = await createTweetService({
      body: req.body.body
    });

    return res.status(201).json({
      success: true,
      message: 'Tweet created successfully',
      data: response
    });
  } catch (error) {
    console.error("CONTROLLER ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

 

export const updateTweet = (req, res) => {
    const { id } = req.params;
    console.log('updateTweet handler invoked');
    return res.json({
        message: `tweet updated with id ${id}`  
    });
};

