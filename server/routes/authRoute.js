const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

// Require controller modules.
var authController = require("../controllers/authController");

//Signup
//Link: /api/user/signup
router.post("/signup", authController.signupUser);
//Get Users
//Link: /api/user/getUsers
router.get("/getUsers", authController.getUsers);

//Get User
//Link: /api/user/:id
router.get("/:id", authController.getUser);

//local Signin
//Link: /api/user/auth/local
router.post("/auth/local", authController.localSigninUser);

//Facebook Signin
//Link: /api/user/auth/facebook
router.get("/auth/facebook", authController.facebookSigninUser);

//Facebook callback
//Link: /api/user/auth/facebook/callback
router.get("/auth/facebook/callback", authController.facebookSigninUserCB);

//Logout
//Link: /api/user/auth;logout
router.get("/auth/logout", authController.logout);

//Update user
//Link: /api/user/:id
router.put("/:id", protect, authController.updateUser);

//Add Friend
//Link: /api/user/addFriend/:id
router.put("/addFriend/:id", protect, authController.friendRequest);

module.exports = router;
