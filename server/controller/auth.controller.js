import genToken from "../config/token.js";
import User from "../models/user.js";
export const googleAuth=async(req,res)=>{
  try {
  let {name,email}=req.body;
  let user=await User.findOne({email});
  if(!user){
    user=await User.create({
        name, email,credits:100,
    });
  }
  await user.save();
  let token=await genToken(user._id);
  res.cookie("token",token,{
    httpOnly:true,
    secure:true,
    sameSite:"none",
    maxAge:7*24*60*60*1000
  });
  res.status(200).json(user);
  } catch (error) {
    res.status(400).json({"message":`Google auth error ${error}`});
  } 
}
export const logOut=async(req,res)=>{
    try {
        res.clearCookie("token");
         return res.status(200).json({
            success: true,
            message: "Logged out successfully"
        });
    } catch (error) {
        res.status(400).json({"message":`${error}`});
    }
}