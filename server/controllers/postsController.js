const Post = require("../models/post");
const Comment = require("../models/comment");
const asyncHandler = require("express-async-handler");
const { where } = require("../models/post");

// GET all posts -- Acces Public
// route GET /api/posts
exports.getPosts = asyncHandler(async function (req, res) {
	let posts = await Post.find()
		.sort({ createdAt: -1 })
		.populate("comments")
		.populate("author")
		.populate("likes")
		.catch((err) => {
			res.status(400);
			throw new Error(err);
		});
	res.status(200).json(posts);
});

// GET all posts -- Acces Public
// route GET /api/posts
exports.getUserPosts = asyncHandler(async function (req, res) {
	let id = req.params.id;
	let posts = await Post.find({ author: id })
		.sort({ createdAt: -1 })
		.populate("comments")
		.populate("likes")
		.populate("author")
		.catch((err) => {
			res.status(400);
			throw new Error("something went wrong");
		});
	res.status(200).json(posts);
});

// GET a unique -- Acces Public
// route GET /api/posts/:id
exports.getPost = asyncHandler(async function (req, res) {
	let id = req.params.id;
	let post = await Post.findById(id)
		.populate("comments")
		.populate("likes")
		.populate("author")
		.catch((err) => {
			res.status(400);
			throw new Error("Post not found");
		});

	res.status(200).json(post);
});
// Upload Images
exports.uploadImage = asyncHandler(async function (req, res) {
	res.status(201).json(req.file.publicUrl);
});

// CREATE a new post
// route POST /api/posts
exports.addPost = asyncHandler(async function (req, res) {
	let { description, postImage, author } = req.body;
	if (!description || !postImage || !author) {
		res.status(400);
		throw new Error("all fields are required");
	}
	const post = await Post.create({
		description,
		postImage,
		author,
		comments: [],
		likes: [],
	});
	res.status(200).json(post);
});

// Add a new Comment
// route POST /api/posts/:id/comment
exports.addComment = asyncHandler(async function (req, res) {
	let { text, author } = req.body;
	let id = req.params.id;
	if (!text || !author) {
		res.status(400);
		throw new Error("all fields are required");
	}
	const post = await Post.findById(id);
	const comment = await Comment.create({ text, author });
	if (post && comment) {
		let comments = post.comments.push(comment.id);
		const updatedPost = await Post.findByIdAndUpdate(id, { ...post, comments }, { new: true })
			.populate("comments")
			.populate("author");

		res.status(200).json(updatedPost);
	} else {
		res.status(400);
		throw new Error("something went wrong");
	}
});

// UPDATE a post
// route PUT /api/posts/:id
exports.updatePost = asyncHandler(async function (req, res) {
	let { title, text, author, status } = req.body;
	let id = req.params.id;
	if (!title || !text || !author || !status) {
		res.status(400);
		throw new Error("all fields are required");
	}
	const post = await Post.findById(id);
	const updatedFields = { title, text, author, status };
	if (post) {
		const updatedPost = await Post.findByIdAndUpdate(
			id,
			{ ...post, updatedFields },
			{ new: true },
		)
			.populate("author")
			.populate("comments");
		res.status(200).json(updatedPost);
	} else {
		res.status(400);
		throw new Error("something went wrong");
	}
});

// DELETE a post
// route DELETE /api/posts/:id
exports.deletePost = asyncHandler(async function (req, res) {
	let id = req.params.id;
	const deletedPost = await Post.findByIdAndDelete(id).populate("comments");
	const deletedComments = [];
	for (const element of deletedPost.comments) {
		const deletedComment = await Comment.findByIdAndDelete(element.id);
		deletedComments.push(deletedComment);
	}
	res.status(201).json({ deletedPost, deletedComments });
});
