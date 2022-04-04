const Localstrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const User = require("../models/user");
const Local = new Localstrategy((username, password, done) => {
	User.findOne(username, (err, user) => {
		if (err) {
			return done(err);
		}
		if (!user) {
			return done(null, false, { message: "user was not found" });
		}
		bcrypt.compare(password, user.password, (err, res) => {
			if (res) {
				// passwords match! log user in
				return done(null, user);
			} else {
				// passwords do not match!
				return done(err, false, { message: "Incorrect password" });
			}
		});
	});
});
module.exports = { Local };
