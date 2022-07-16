const Post = require("../models/post");
const Comment = require("../models/comment");
const asyncHandler = require("express-async-handler");

// GET all posts -- Acces Public
// route GET /api/posts
exports.getPosts = asyncHandler(async function (req, res) {
	let posts = await Post.find()
		.sort({ createdAt: -1 })
		.populate([
			{ path: "author", select: "name profilePic", model: "User" },
			{
				path: "comments",
				model: "Comment",
				populate: {
					path: "author",
					select: "name profilePic ",
					model: "User",
				},
			},
			{ path: "likes", select: "name", model: "User" },
		])
		.catch((err) => {
			res.status(400);
			throw new Error(err);
		});
	res.status(200).json(posts);
});

// GET all user's posts -- Acces Public
// route GET /api/posts
exports.getUserPosts = asyncHandler(async function (req, res) {
	let id = req.params.id;
	let posts = await Post.find({ author: id })
		.sort({ createdAt: -1 })
		.populate([
			{ path: "author", select: "name profilePic", model: "User" },
			{
				path: "comments",
				model: "Comment",
				populate: {
					path: "author",
					select: "name profilePic ",
					model: "User",
				},
			},
			{ path: "likes", select: "name", model: "User" },
		])
		.catch((err) => {
			res.status(400);
			throw new Error("something went wrong");
		});
	res.status(200).json(posts);
});

// GET a unique post -- Acces Public
// route GET /api/posts/:id
exports.getPost = asyncHandler(async function (req, res) {
	let id = req.params.id;
	let post = await Post.findById(id)
		.populate([
			{
				path: "author",
				select: "name profilePic",
				model: "User",
			},
			{
				path: "comments",
				model: "Comment",
				populate: {
					path: "author",
					select: "name profilePic ",
					model: "User",
				},
			},
			{
				path: "likes",
				select: "name ",
				model: "User",
			},
		])
		.catch((err) => {
			res.status(400);
			throw new Error("Post not found");
		});

	res.status(200).json(post);
});

// Get URL of Uploaded Images --Private Acces
exports.uploadImage = asyncHandler(async function (req, res) {
	res.status(201).json({ url: req.file.publicUrl, path: req.file.fileRef.name });
});

// CREATE a new post -- Private acces
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
	await post.populate([
		{ path: "author", select: "name profilePic", model: "User" },
		{
			path: "comments",
			model: "Comment",
			populate: {
				path: "author",
				select: "name profilePic ",
				model: "User",
			},
		},
		{ path: "likes", select: "name", model: "User" },
	]);
	res.status(200).json(post);
});

// Add a new Comment
// route POST /api/posts/:id/comment
exports.addComment = asyncHandler(async function (req, res) {
	let { text, author } = req.body;
	let postId = req.params.id;
	if (!text || !author) {
		res.status(400);
		throw new Error("all fields are required");
	}
	try {
		let post = await Post.findById(postId);
		let comment = await Comment.create({ text, author });
		post.comments.push(comment.id);
		await post.save();
		res.status(200).json(await comment.populate({ path: "author", select: "name profilePic" }));
	} catch (error) {
		res.status(400);
		throw new Error(error);
	}
});

// Delete a Comment
// route DELETE /api/posts/:postId/comment/:commentId
exports.deleteComment = asyncHandler(async function (req, res) {
	let postId = req.params.postId;
	let commentId = req.params.commentId;
	try {
		await Comment.findByIdAndDelete(commentId);
		let post = await Post.findById(postId);
		if (post.comments.includes(commentId)) {
			post.comments.splice(post.comments.indexOf(commentId), 1);
		}
		let savedPost = await post.save();
		res.status(200).json(savedPost);
	} catch (error) {
		res.status(400);
		throw new Error(error);
	}
});

// Add Remove Like
// route POST /api/posts/:id/Like
exports.addLike = asyncHandler(async function (req, res) {
	let { author } = req.body;
	let postId = req.params.id;
	if (!author) {
		res.status(400);
		throw new Error("no user");
	}
	try {
		let post = await Post.findById(postId);
		if (post.likes.includes(author)) {
			post.likes.splice(post.likes.indexOf(author), 1);
		} else {
			post.likes.push(author);
		}
		await post.save();
		await post.populate({ path: "likes", select: "name" });
		res.status(200).json(post.likes);
	} catch (error) {
		res.status(400);
		throw new Error(error);
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
	for (const element of deletedPost.comments) {
		await Comment.findByIdAndDelete(element.id);
	}
	res.status(201).json({ id: deletedPost.id });
});
