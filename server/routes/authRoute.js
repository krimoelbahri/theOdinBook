const express = require("express");
const router = express.Router();

// Require controller modules.
var authController = require("../controllers/authController");

//Signup
//Link: /api/user/signup
router.post("/signup", authController.signupUser);
//Signin

//local Signin
//Link: /api/user/auth/local
router.post("/auth/local", authController.localSigninUser);

module.exports = router;
