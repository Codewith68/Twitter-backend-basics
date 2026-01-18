import {signUpUser as signUpUserService ,
    loginUser as loginUserService,
  } from "../service/userService.js";
import { StatusCodes } from "http-status-codes";
import { successResponse, errorResponse } from "../utils/responses.js";



export const signUpUser = async (req, res) => {
  try {
    const user = await signUpUserService({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    return successResponse(res, "User created successfully", user);
  } catch (error) {
    return errorResponse(res, error);
  }
};




export const loginUser =async (req,res)=>{
    try{
        const response =await loginUserService({
            email:req.body.email,
            password:req.body.password
        });
        return successResponse(res, "User logged in successfully", response);
    }
    catch(error){
        errorResponse(res, error);
    }
}
