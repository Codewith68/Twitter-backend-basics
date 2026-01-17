import { success } from "zod";
import { createTweet as createTweetService ,
   getAllTweets as getallTweetsService,
   getAllTweetsId as getAllTweetsIdService,
  deletTweetById as deleteTweetByIdService,
updateTweet as updateTweetService  } from "../service/tweetService.js";
import { StatusCodes } from "http-status-codes";
import { successResponse, errorResponse } from "../utils/responses.js";



export const createTweet = async (req, res) => {
  console.log(req.file);
  try {
    console.log("REQ BODY:", req.body);

    const response = await createTweetService({
      body: req.body.body
    });

    return res.status(StatusCodes.OK).json({
      success: true,
      message: 'Tweet created successfully',
      data: response
    });
  } catch (error) {
    errorResponse(res, error);
  }
};


export const getTweets = async (req,res)=>{
  try{
    const response = await getallTweetsService();
    return successResponse(res, "Tweets fetched successfully", response);
    }
  catch(error)
  {
      errorResponse(res, error);
}
}



export const getTweetId =async(req,res)=>{
  try{
    const {id}=req.params;
    const response=await getAllTweetsIdService(id);
    return  successResponse(res, `Tweets fetched successfully with id ${id}`, response);
  }
  catch(error)
  {
    errorResponse(res, error);
  }
}



export const deletTweetById =async(req,res)=>{
    try{
        const {id}=req.params;
        const response=await deleteTweetByIdService(id);
        return  successResponse(res, `weets deleted   successfully with id ${id}`, response);
  }
    catch(error){errorResponse(res, error);
    }
  }

  export const updateTweet =async(req,res)=>{ 
    try{
        const {id}=req.params;
        const response=await updateTweetService(id,req.body);
        return successResponse(res, ` Tweets update  successfully with id  ${id}`, response);
    }
    catch(error){
      errorResponse(res, error);
  }
}

