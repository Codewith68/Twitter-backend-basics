import { StatusCodes } from "http-status-codes";

export const errorResponse = (res, error)=>
    {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
          success:false,
          message:error.message,
          data:null
        })
      }

export const successResponse = (res,message,data)=>{
    res.status(StatusCodes.OK).json({
      success:true,
      message:message,
      data:data
    })
}