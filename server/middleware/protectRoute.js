const jwt = require("jsonwebtoken");
const User = require("../models/user.models");
const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.access_token;
    if (!token)
      return res
        .status(401)
        .json({ message: "Unauthorized - No Token Provided" });

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    if (!decodedToken)
      return res.status(401).json({ message: "Unauthorized - Invalid Token" });

    const user = await User.findById(decodedToken.userId).select("-password");

    if (!user) {
      return res.status(401).json({ message: "Unauthorized - Invalid Token" });
    }
    req.user = user;
    next();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = protectRoute;
