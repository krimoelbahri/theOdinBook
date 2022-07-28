const jwt = require("jsonwebtoken");
const passport = require("passport");
const User = require("../models/user");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");

// Generate JWT
const generateToken = (id) => {
	return jwt.sign({ id }, process.env.JWT_SECRET, {
		expiresIn: "1d",
	});
};

//Get User by Id
exports.getUser = asyncHandler(async function (req, res) {
	try {
		let id = req.params.id;
		const user = await User.findById(id, "name profilePic coverPic friends friendRequests")
			.select("-password")
			.populate([
				{ path: "friends", model: "User", select: "name profilePic" },
				{ path: "friendRequests", model: "User", select: "name profilePic" },
			]);
		res.status(200).json(user);
	} catch (error) {
		res.status(400);
		throw new Error(error);
	}
});

//Get all users
exports.getUsers = asyncHandler(async function (req, res) {
	try {
		const users = await User.find({}, "name profilePic friends friendRequests")
			.select("-password")
			.populate([
				{ path: "friends", model: "User", select: "name profilePic" },
				{ path: "friendRequests", model: "User", select: "name profilePic" },
			]);
		res.status(200).json(users);
	} catch (error) {
		res.status(400);
		throw new Error(error);
	}
});

//Get current user
exports.getCurrentUser = asyncHandler(async function (req, res) {
	let id = req.user?._id;
	if (!id) res.status(200).json(null);
	try {
		const user = await User.findById(id, "name profilePic coverPic friends friendRequests")
			.select("-password")
			.populate([
				{ path: "friends", model: "User", select: "name profilePic" },
				{ path: "friendRequests", model: "User", select: "name profilePic" },
			]);
		let token = generateToken(user?._id);
		res.status(200).json({ user, token });
	} catch (error) {
		res.status(400);
		throw new Error(error);
	}
});

//Signup
exports.signupUser = asyncHandler(async function (req, res) {
	const { name, email, password, confirmPassword } = req.body;
	if (!name || !email || !password || !confirmPassword) {
		res.status(400);
		throw new Error("all fields are required");
	}

	const userExistsEmail = await User.findOne({ email });
	const userExistsName = await User.findOne({ name });

	if (userExistsEmail || userExistsName) {
		res.status(400);
		throw new Error("User already exists");
	}

	if (password !== confirmPassword) {
		res.status(400);
		throw new Error("Passwords didn't match");
	}

	//hashing password
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(password, salt);

	const user = await User.create({
		name,
		email,
		password: hashedPassword,
		profilePic: { path: "", url: process.env.USER_PIC },
		coverPic: { path: "", url: process.env.COVER_PIC },
	});

	if (user) {
		req.logIn(user, (err) => {
			if (err) {
				res.status(400);
				throw new Error("login error");
			}
			res.status(201).json(" user created");
		});
	} else {
		res.status(400);
		throw new Error("Invalid user data");
	}
});

//Signin
exports.localSigninUser = asyncHandler(async function (req, res, next) {
	passport.authenticate("local", function (err, user, info) {
		if (err) {
			res.status(400);
			return next(Error(err));
		}
		if (!user) {
			res.status(400);
			return next(Error("no user"));
		}
		req.login(user, (loginErr) => {
			if (loginErr) {
				res.status(400);
				return next(Error(loginErr));
			}
			res.json(user);
		});
	})(req, res, next);
});

//facebook signin logic
exports.facebookSigninUser = passport.authenticate("facebook");
exports.facebookSigninUserCB = function (req, res, next) {
	passport.authenticate("facebook", function (err, user, info) {
		if (err) {
			res.status(400);
			return next(Error(err));
		}
		if (!user) {
			res.status(400);
			return next(Error("no user"));
		}
		res.json({
			_id: user.id,
			name: user.name,
			email: user.email,
			token: generateToken(user.id),
		});
	})(req, res, next);
};

exports.logout = function (req, res) {
	req.logout();
	res.json({ user: req.user });
};

//Update User
exports.updateUser = asyncHandler(async function (req, res) {
	if (!req.file) {
		res.status(400);
		throw new Error("Please include an image");
	}

	let { action } = req.body;
	let data = { url: req.file?.publicUrl, path: req.file?.fileRef.name };
	let id = req.params.id;

	try {
		const user = await User.findById(id);
		if (action === "profile") user.profilePic = data;
		if (action === "cover") user.coverPic = data;
		await user.save();
		res.status(200).json({ profilePic: user.profilePic, coverPic: user.coverPic });
	} catch (error) {
		res.status(400);
		throw new Error(error);
	}
});

//Friend request
exports.friendRequest = asyncHandler(async function (req, res) {
	let { author, friend, action } = req.body;
	try {
		const requestedFriend = await User.findById(friend).select("-password");
		if (action === "cancel" && requestedFriend.friendRequests.includes(author)) {
			requestedFriend.friendRequests.splice(
				requestedFriend.friendRequests.indexOf(author),
				1,
			);
		}
		if (action === "request" && !requestedFriend.friendRequests.includes(author)) {
			requestedFriend.friendRequests.push(author);
		}
		await requestedFriend.save();
		res.status(200).json(requestedFriend.friendRequests);
	} catch (error) {
		res.status(400);
		throw new Error(error);
	}
});

//Friend request reply
exports.friendRequestReply = asyncHandler(async function (req, res) {
	let { author, friend, action } = req.body;
	try {
		const _friend = await User.findById(friend);
		const user = await User.findById(author);

		if (
			action === "accept" &&
			!user.friends.includes(friend) &&
			user.friendRequests.includes(friend) &&
			!_friend.friends.includes(author)
		) {
			user.friends.push(friend);
			_friend.friends.push(author);
			user.friendRequests.splice(user.friendRequests.indexOf(friend), 1);
		}

		if (
			action === "remove" &&
			user.friends.includes(friend) &&
			_friend.friends.includes(author)
		) {
			user.friends.splice(user.friends.indexOf(friend), 1);
			_friend.friends.splice(user.friends.indexOf(author), 1);
		}

		if (action === "deny" && user.friendRequests.includes(friend)) {
			user.friendRequests.splice(user.friendRequests.indexOf(friend), 1);
		}
		await _friend.save();
		await user.save();

		res.status(200).json({ userFriends: user.friends, userFriendsReq: user.friendRequests });
	} catch (error) {
		res.status(400);
		throw new Error(error);
	}
});
