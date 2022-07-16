const express = require("express");
const router = express.Router();
const { uploadImage, setDirectory } = require("../middleware/firebase");

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
//URL /api/posts/
router.post("/", protect, postsController.addPost);

//Upload images
//URL /api/posts/uploadImg
router.post("/uploadImg", protect, uploadImage.single("imgFile"), postsController.uploadImage);

// Adding new comment
//URL /api/posts/:id/comment
router.post("/:id/comment", protect, postsController.addComment);

// Delete comment
//URL /api/posts/:postId/comment/:commentId
router.delete("/:postId/comment/:commentId", protect, postsController.deleteComment);

// Adding new Like
//URL /api/posts/:id/Like
router.post("/:id/Like", protect, postsController.addLike);

// update a Post
router.put("/:id", protect, postsController.updatePost);

// delete a Post
router.delete("/:id", protect, postsController.deletePost);

module.exports = router;
