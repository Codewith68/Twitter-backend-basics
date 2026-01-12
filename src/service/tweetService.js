import * as badWords from 'bad-words';
import { createTweet as createTweetRepository } from "../Repository/tweetRepository.js";

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
