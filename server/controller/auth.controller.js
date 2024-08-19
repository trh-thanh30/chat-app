const User = require("../models/user.models");
const bcryptjs = require("bcryptjs");
const verifyToken = require("../utils/generateToken");
const logIn = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).json({ message: "All fields are required" });
  const user = await User.findOne({ username });
  if (!user) return res.status(400).json({ message: "User does not exist" });
  const isPasswordCorrect = bcryptjs.compareSync(password, user.password);
  if (!isPasswordCorrect)
    return res.status(400).json({ message: "Invalid credentials" });
  try {
    verifyToken(user._id, res);
    res.status(200).json({
      _id: user._id,
      username: user.username,
      fullName: user.fullName,
      profilePic: user.profilePic,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const signUp = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }
    const user = await User.findOne({ username });
    if (user) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = bcryptjs.hashSync(password, 10);
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    if (newUser) {
      verifyToken(newUser._id, res);
      await newUser.save();
      res.status(200).json({
        _id: newUser._id,
        username: newUser.username,
        fullName: newUser.fullName,
        profilePic: newUser.profilePic,
      });
    } else {
      return res.status(400).json({ message: "Invalid user data" });
    }
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
const logOut = async (req, res) => {};
module.exports = { logIn, signUp, logOut };
