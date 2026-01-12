import Tweet from "../schema/tweet.js";



export const createTweet = async ({body}) => {
    try {
        const tweet = await Tweet.create({body});
        return tweet;
    }
    catch (error){
        throw Error;
    }
};


export const getAllTweets = async () => {
    try {
        const tweets = await Tweet.find();
        return tweets;
    }
    catch (error){
          throw Error;
    }
};

// import { createTweet, getAllTweets } from '../services/tweetService.js';

export const getTweetById =async (tweeetId)=>{
    try{
        const tweet = await Tweet.findById(tweeetId);
        return tweet;
    }
    catch (error){  
        throw Error;
    }
}

