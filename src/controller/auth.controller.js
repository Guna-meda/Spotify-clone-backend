import { User } from "../modules/user.module.js";

const callbackAuth = async (req, res) => {
  try {

        console.log("🔁 Auth Callback Hit");

    const { id, firstName, lastName, imageUrl } = req.body;
        console.log("📦 Received:", { id, firstName, lastName, imageUrl });


    //check if user already exists
    const user = await User.findOne({ clerkId: id });

    if (!user) {
      //signup
      await User.create({
        clerkId: id,
        fullName: `${firstName} ${lastName}`,
        imageUrl,
      });
    }

          console.log("✅ New user created:", newUser);


    res.status(200).json({ success: true });
  } catch (error) {
    console.log("Error in auth callback.", error);
    next(error)
  }
}

export {callbackAuth}