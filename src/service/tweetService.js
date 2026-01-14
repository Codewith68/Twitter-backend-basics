import * as badWords from 'bad-words';
import { createTweet as createTweetRepository 
  , getAllTweets as getAllTweetsRepository
  , getTweetById as getTweetByIdRepository
, deletTweetById as deletTweetByIdRepository
, updateTweet as updateTweetRepository } from "../Repository/tweetRepository.js";

const Filter = badWords.Filter; // THIS IS THE KEY LINE

export const createTweet = async ({ body }) => {
  if (!body) {
    throw new Error("Tweet body is required");
  }

  const filter = new Filter(); // now this works
  const filteredBody = filter.clean(body);

  if (filteredBody !== body) {
    throw new Error("Blocked word found in the tweet body");
  }

  return await createTweetRepository({ body });
};


export const getAllTweets = async () => {
  const Tweet= await getAllTweetsRepository();
  return Tweet;
};


export const getAllTweetsId =async (id)=>{
  const TweetId= await getTweetByIdRepository(id);

  if(!TweetId){
    throw new Error("Tweet not found");
  }
  return TweetId;
}

export const deletTweetById =async (id)=>{  
        const response =await deletTweetByIdRepository(id);
        return response;
}

export const updateTweet =async (id,body)=>{  
  const response =await updateTweetRepository(id,body);
  return response;
}