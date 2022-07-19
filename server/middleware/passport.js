const LocalStrategy = require("passport-local").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const bcrypt = require("bcryptjs");
const User = require("../models/user");
const Local = new LocalStrategy((username, password, done) => {
	User.findOne({ email: username }, (err, user) => {
		if (err) {
			return done(err);
		}
		if (!user) {
			return done(null, false, { message: "Incorrect username" });
		}
		bcrypt.compare(password, user.password, (err, res) => {
			if (res) {
				// passwords match! log user in
				return done(null, user);
			} else {
				// passwords do not match!
				return done(null, false, { message: "Incorrect password" });
			}
		});
	}).populate({ path: "friends", model: "User", select: "name profilePic" });
});
const Facebook = new FacebookStrategy(
	{
		clientID: process.env.FACEBOOK_APP_ID,
		clientSecret: process.env.FACEBOOK_APP_SECRET,
		callbackURL: "http://localhost:5000/api/user/auth/facebook/callback",
		profileFields: ["id", "displayName", "photos", "email"],
	},
	function (accessToken, refreshToken, profile, cb) {
		User.findOne({ facebookId: profile.id }, function (err, user) {
			if (!user) {
				User.create(
					{
						name: profile.displayName,
						email: profile.emails ? profile.emails[0] : null,
						facebookId: profile.id,
						profilePic: profile.photos[0].value,
					},
					(err, user) => {
						return cb(err, user);
					},
				);
			} else {
				return cb(err, user);
			}
		});
	},
);
module.exports = { Local, Facebook };
