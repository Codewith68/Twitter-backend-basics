import { getAllTweetsId, deletTweetById, updateTweet, createTweet } from '../src/service/tweetService.js';
import * as tweetrepository from '../src/Repository/tweetRepository.js';

jest.mock('../src/Repository/tweetRepository.js',()=>({
    getTweetById :jest.fn().mockResolvedValue({
            id: 1,
            content:'Tweet 1'
        }),
    deletTweetById :jest.fn().mockResolvedValue({
            id: 1,
            content:'Tweet 1'
        }),
    updateTweet :jest.fn().mockResolvedValue({
            id: 1,
            content:'Updated Tweet'
        }),
    createTweet :jest.fn().mockResolvedValue({
            id: 1,
            content:'Tweet 1'
        }),
    getAllTweets :jest.fn().mockResolvedValue([
        {
            id: 1,
            content:'Tweet 1'
        },
        {
            id: 2,
            content:'Tweet 2'
        }
    ])
}));

test('should get tweet by id', async () => {
    const result = await getAllTweetsId(1);
    expect(result).toEqual({
            id: 1,
            content:'Tweet 1'
        });
    }); 

test('should delete tweet by id', async () => {
    const result = await deletTweetById(1);
    expect(result).toEqual({
            id: 1,
            content:'Tweet 1'
        });
    }); 

test('should update tweet', async () => {
    const result = await updateTweet(1, { body: 'Updated Tweet' });
    expect(result).toEqual({
            id: 1,
            content:'Updated Tweet'
        });
    }); 

test('should create tweet', async () => {
    const result = await createTweet({ body: 'Tweet 1' });
    expect(result).toEqual({
            id: 1,
            content:'Tweet 1'
        });
    });     