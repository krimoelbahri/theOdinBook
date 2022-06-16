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

exports.signupUser = asyncHandler(async function (req, res) {
	const { name, email, password, confirmPassword, profilePic } = req.body;
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
		profilePic: profilePic || process.env.USER_PIC,
	});
	if (user) {
		res.status(201).json({
			_id: user.id,
			name: user.name,
			email: user.email,
			profilePic: user.profilePic,
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
				_id: req.user.id,
				name: req.user.name,
				email: req.user.email,
				profilePic: user.profilePic,
				token: generateToken(req.user.id),
			});
		});
	})(req, res, next);
};
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
