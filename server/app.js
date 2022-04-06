const express = require("express");
const session = require("express-session");
require("dotenv").config();
const mongoose = require("mongoose");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const { errorHandler } = require("./middleware/errorMiddleware");
const { Local } = require("./middleware/passport");
const authRouter = require("./routes/authRoute");
const postsRouter = require("./routes/postsRoute");
const User = require("./models/user");
const port = process.env.PORT || 5000;
const app = express();

//Set up mongoose connection
var dev_db_url = process.env.MONGODB_URI_DEV;
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

//setting up passport
passport.use(Local);
passport.serializeUser(function (user, done) {
	done(null, user.id);
});
passport.deserializeUser(function (id, done) {
	console.log(id);
	User.findById(id, function (err, user) {
		done(err, user);
	});
});
//----------------
app.use(session({ secret: "cats", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//Using routes
app.use("/api/posts", postsRouter);
app.use("/api/user", authRouter);

app.use(errorHandler);
app.listen(port, () => console.log(`Server Listening on port ${port}`));
