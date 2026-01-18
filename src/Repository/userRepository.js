import User from "../schema/user.js";

export const createUser = async ({ username, email, password }) => {
  const user = await User.create({
    username,
    email,
    password,
  });

  return user;
};


export const loginUser =async (req,res)=>{
        try{
                const user = await User.findOne({email:req.body.email});    
                }
        catch(error){
                errorResponse(res, error);

        }
}   


