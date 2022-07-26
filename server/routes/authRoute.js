const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const { uploadImage } = require("../middleware/firebase");

// Require controller modules.
var authController = require("../controllers/authController");

//Get currentUser
//Link: /api/user/
router.get("/", authController.getCurrentUser);

//Get Users
//Link: /api/user/getUsers
router.get("/getUsers", authController.getUsers);

//Logout
//Link: /api/user/auth;logout
router.get("/auth/logout", authController.logout);

//Get User
//Link: /api/user/:id
router.get("/:id", authController.getUser);

//local Signin
//Link: /api/user/auth/local
router.post("/auth/local", authController.localSigninUser);

//Signup
//Link: /api/user/signup
router.post("/signup", authController.signupUser);

//Facebook Signin
//Link: /api/user/auth/facebook
router.get("/auth/facebook", authController.facebookSigninUser);

//Facebook callback
//Link: /api/user/auth/facebook/callback
router.get("/auth/facebook/callback", authController.facebookSigninUserCB);

//Friend request
//Link: /api/user/addFriend
router.put("/friend-request", protect, authController.friendRequest);

//Friend request reply
//Link: /api/user/addFriend
router.put("/friend-request-reply", protect, authController.friendRequestReply);

//Update user
//Link: /api/user/:id
router.put("/:id", protect, uploadImage.single("imgFile"), authController.updateUser);

module.exports = router;
