import User from "../models/User";

export async function getRecommendedUsers(req, res) {
  try {
    const currentUserId = req.user._id;

    const currentUser = req.user;

    const recommentedUsers = await User.find({
      $and: [{ _id: { $ne: currentUserId } }, { _id: { $nin: currentUser.friends } }, { isOnboarded: true }],
    });

    return res.status(200).json(recommentedUsers);
  } catch (error) {
    console.log("Error in getRecommendedUser controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getMyFriends(req, res) {
  try {
    const user = await User.findById(req.user._id)
      .select("friends")
      .populate("friends", "fullName profilePic nativeLanguage learningLanguage");

    res.status(200).json(user.friends);
  } catch (error) {
    console.error("Enter in getMyFriends controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
