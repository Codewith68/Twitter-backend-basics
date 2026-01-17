import { mockRequest, mockResponse } from './mocker.js';
import {getTweets} from '../src/controllers/tweetController';
import * as tweetService from '../src/service/tweetService';

jest.mock('../src/service/tweetService.js',()=>({
    getAllTweets :jest.fn().mockResolvedValue([
        {
            content:'Tweet 1'
        },
        {
            content:'Tweet 2'
        }
    ])
}));

test('should get all tweets', async () => {
    const req = mockRequest();
    const res = mockResponse();
    await getTweets(req, res);
    const response = [
        {
            content:'Tweet 1'
        },
        {
            content:'Tweet 2'
        }
            ];
       expect(res.json).toHaveBeenCalledWith({
        success: true,
        data: response,
        message: 'Tweets fetched successfully'
       });
    }); 

    test('should handel error when getting all tweets',async()=>{
        const req = mockRequest();
        const res = mockResponse();
        tweetService.getAllTweets.mockRejectedValue(new Error('internal server error'));
        await getTweets(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({
            success: false,
            message: 'internal server error',
            data: null
        });
    })