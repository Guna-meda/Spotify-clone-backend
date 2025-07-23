import { User } from "../modules/user.module.js";

const callbackAuth = async (req, res, next) => {
  try {
    console.log("🔁 Auth Callback Hit");
    const { id, firstName, lastName, imageUrl } = req.body;
    console.log("📦 Received:", { id, firstName, lastName, imageUrl });

    // Check if user already exists
    const user = await User.findOne({ clerkId: id });

    if (!user) {
      // Create new user and assign to newUser variable
      const newUser = await User.create({
        clerkId: id,
        fullName: `${firstName || ''} ${lastName || ''}`.trim(), // Handle null/undefined names
        imageUrl,
      });
      console.log("✅ New user created:", newUser);
    } else {
      console.log("✅ User already exists:", user);
    }

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error in auth callback:", error);
    res.status(500).json({ success: false, error: error.message });
    next(error);
  }
};

export { callbackAuth };