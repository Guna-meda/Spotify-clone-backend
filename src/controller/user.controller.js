import {User} from "../modules/user.module.js"

export const getAllUsers = async (req,res,next) => {
  try {
    const currentUserId = req.auth.userId
    const users =await User.find({ clerkId: { $ne: currentUserId } })
    res.statur(200).json(users);
  } catch (error) {
    console.log("Error in getAllUsers" , error);
    next(error);
  }
}