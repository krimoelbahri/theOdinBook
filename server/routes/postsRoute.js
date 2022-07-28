const express = require("express");
const router = express.Router();
const { uploadFile } = require("../middleware/firebase");

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
// URL /api/posts/:id
router.get("/:id", postsController.getPost);

// Adding new Post
// URL /api/posts/
router.post("/", protect, uploadFile, postsController.addPost);

// Adding new comment
//URL /api/posts/:id/comment
router.post("/:id/comment", protect, postsController.addComment);

// Adding new Like
//URL /api/posts/:id/Like
router.post("/:id/Like", protect, postsController.addLike);

// Delete comment
//URL /api/posts/:postId/comment/:commentId
router.delete("/:postId/comment/:commentId", protect, postsController.deleteComment);

// delete a Post
router.delete("/:id", protect, postsController.deletePost);

// update a Post
router.put("/:id", protect, postsController.updatePost);

module.exports = router;
