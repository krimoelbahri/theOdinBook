const jwt = require("jsonwebtoken");
const passport = require("passport");
const User = require("../models/user");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");

// Generate JWT
const generateToken = (id) => {
	return jwt.sign({ id }, process.env.JWT_SECRET, {
		expiresIn: "30d",
	});
};

//Get User by Id
exports.getUser = asyncHandler(async function (req, res) {
	try {
		let id = req.params.id;
		const user = await User.findById(id, "name profilePic coverPic friends")
			.select("-password")
			.populate({
				path: "friends",
				model: "User",
				select: "name profilePic",
			});
		res.status(200).json(user);
	} catch (error) {
		res.status(400);
		throw new Error(error);
	}
});

//Get all users
exports.getUsers = asyncHandler(async function (req, res) {
	try {
		const users = await User.find({}, "name profilePic friends").select("-password").populate({
			path: "friends",
			model: "User",
			select: "name profilePic",
		});
		res.status(200).json(users);
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

	const userExists = await User.findOne({ email });

	if (userExists) {
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
		await user.populate({ path: "friends", model: "User", select: "name profilePic" });
		res.status(201).json({
			_id: user.id,
			name: user.name,
			email: user.email,
			profilePic: user.profilePic,
			coverPic: user.coverPic,
			friends: user.friends,
			token: generateToken(user.id),
		});
	} else {
		res.status(400);
		throw new Error("Invalid user data");
	}
});

exports.localSigninUser = function (req, res, next) {
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
			res.json({
				_id: user.id,
				name: user.name,
				email: user.email,
				profilePic: user.profilePic,
				coverPic: user.coverPic,
				friends: user.friends,
				token: generateToken(req.user.id),
			});
		});
	})(req, res, next);
};

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
	let { action, data } = req.body;
	let id = req.params.id;

	try {
		const user = await User.findById(id).select("-password");
		if (action === "profile") user.profilePic = data;
		if (action === "cover") user.coverPic = data;
		await user.save();
		await user.populate({ path: "friends", model: "User", select: "name profilePic" });
		res.status(200).json(user);
	} catch (error) {
		res.status(400);
		throw new Error(error);
	}
});
//Add Friens
exports.addFriend = asyncHandler(async function (req, res) {
	let { friend } = req.body;
	let id = req.params.id;

	try {
		const user = await User.findById(id).select("-password");
		if (user.friends.includes(friend)) {
			user.friends.splice(user.friends.indexOf(friend), 1);
		} else {
			user.friends.push(friend);
		}
		await user.save();
		await user.populate({ path: "friends", model: "User", select: "name profilePic" });
		res.status(200).json(user);
	} catch (error) {
		res.status(400);
		throw new Error(error);
	}
});
