const express = require("express");
const { getUserForSideBar } = require("../controller/user.contoller");
const protectRoute = require("../middleware/protectRoute");
const router = express.Router();
module.exports = router;
router.get("/", protectRoute, getUserForSideBar);
