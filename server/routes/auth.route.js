const express = require("express");
const { logIn, signUp, logOut } = require("../controller/auth.controller");

const router = express.Router();
router.post("/signup", signUp);
router.post("/login", logIn);
router.post("/logout", logOut);
module.exports = router;
