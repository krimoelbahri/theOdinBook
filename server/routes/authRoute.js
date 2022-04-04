const express = require("express");
const router = express.Router();

// Require controller modules.
var authController = require("../controllers/authController");

//GET a posts
router.post("/signup", authController.signupUser);

//GET a posts
router.post("/signin", authController.signinUser);

module.exports = router;
