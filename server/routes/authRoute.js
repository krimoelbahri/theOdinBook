const express = require("express");
const router = express.Router();

// Require controller modules.
var authController = require("../controllers/authController");

//Signup
//Link: /api/user/signup
router.post("/signup", authController.signupUser);

//Signin
//Link: /api/user/signin
router.post("/signin", authController.signinUser);

module.exports = router;
