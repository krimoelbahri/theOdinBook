const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const { errorHandler } = require("./middleware/errorMiddleware");
const { Local } = require("./middleware/passport");
const authRouter = require("./routes/authRoute");
const postsRouter = require("./routes/postsRoute");

const port = process.env.PORT || 5000;
const app = express();

//Set up mongoose connection
var dev_db_url = process.env.MONGODB_URI_DEV;
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//setting up passport
app.use(passport.initialize());
app.use(passport.session());

passport.use(Local);
//Using routes
app.use("/api/posts", postsRouter);
app.use("/api/user", authRouter);

app.use(errorHandler);
app.listen(port, () => console.log(`Server Listening on port ${port}`));
