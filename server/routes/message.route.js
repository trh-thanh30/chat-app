const express = require("express");
const { sendMessage, getMessage } = require("../controller/message.controller");
const protectRoute = require("../middleware/protectRoute");
const router = express.Router();
router.get("/send/:id", protectRoute, sendMessage);
router.post("/:id", protectRoute, getMessage);
module.exports = router;
