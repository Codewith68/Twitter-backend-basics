import * as badWords from 'bad-words';
// import { signUpUser as signUpUserRepository ,
//     loginUser as loginUserRepository,
//  } from "../Repository/userRepository.js";

const Filter = badWords.Filter; // THIS IS THE KEY LINE


import { createUser } from "../Repository/userRepository.js";

export const signUpUser = async (userData) => {
  return await createUser(userData);
};


export const loginUser = async (req, res) => {
    const response = await loginUserRepository({
        email:req.body.email,
        password:req.body.password
    });
    return successResponse(res, "User logged in successfully", response);

}