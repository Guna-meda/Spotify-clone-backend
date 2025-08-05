import {User} from "../modules/user.module.js"

export const getAllUsers = async (req,res,next) => {
  try {
    const currentUserId = req.auth.userId
    const users =await User.find({ clerkId: { $ne: currentUserId } })
    res.status(200).json(users);
  } catch (error) {
    console.log("Error in getAllUsers" , error);
    next(error);
  }
}