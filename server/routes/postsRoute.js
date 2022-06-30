const express = require("express");
const router = express.Router();
const { multer } = require("../middleware/firebase");

// Require controller modules.
var postsController = require("../controllers/postsController");
const { protect } = require("../middleware/authMiddleware");

//GET all posts
// URL /api/posts/
router.get("/", postsController.getPosts);
//GET user posts
// URL /api/posts/user/:id
router.get("/user/:id", postsController.getUserPosts);
//GET a posts
router.get("/:id", postsController.getPost);

// Adding new Post
//URL /api/posts/
router.post("/", protect, postsController.addPost);
//Upload images
router.post("/uploadImg", protect, multer.single("imgFile"), postsController.uploadImage);

// Adding new comment
router.post("/:id/comment", postsController.addComment);

// update a Post
router.put("/:id", protect, postsController.updatePost);

// delete a Post
router.delete("/:id", protect, postsController.deletePost);

module.exports = router;
