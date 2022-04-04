const express = require("express");
const router = express.Router();
// Require controller modules.
var postsController = require("../controllers/postsController");
const { protect } = require("../middleware/authMiddleware");

//GET all posts
router.get("/", postsController.getPosts);

//GET a posts
router.get("/:id", postsController.getPost);

// Adding new Post
router.post("/", protect, postsController.addPost);

// Adding new comment
router.post("/:id/comment", postsController.addComment);

// update a Post
router.put("/:id", protect, postsController.updatePost);

// delete a Post
router.delete("/:id", protect, postsController.deletePost);

module.exports = router;
