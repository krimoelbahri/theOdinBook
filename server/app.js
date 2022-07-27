const express = require("express");
const session = require("express-session");
const path = require("path");
require("dotenv").config();
const mongoose = require("mongoose");
const passport = require("passport");
const cookieParser = require("cookie-parser");

const { errorHandler } = require("./middleware/errorMiddleware");
const { Local, Facebook } = require("./middleware/passport");
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
passport.use(Facebook);
passport.serializeUser(function (user, done) {
	done(null, user.id);
});
passport.deserializeUser(function (id, done) {
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

//serve frontend
if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "../frontend/build")));

	app.get("*", (req, res) =>
		res.sendFile(path.resolve(__dirname, "../", "frontend", "build", "index.html")),
	);
} else {
	app.get("/", (req, res) => res.send("Please set to production"));
}

app.use(errorHandler);
app.listen(port, () => console.log(`Server Listening on port ${port}`));
