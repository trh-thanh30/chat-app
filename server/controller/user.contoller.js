const User = require("../models/user.models");

const getUserForSideBar = async (req, res) => {
  try {
    const loggedInUserId = req.user.id;
    const allUser = await User.find({ _id: { $ne: loggedInUserId } }).select(
      "-password"
    );
    res.status(200).json(allUser);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
module.exports = { getUserForSideBar };
