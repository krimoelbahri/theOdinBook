const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
	{
		name: { type: String },
		email: { type: String },
		facebookId: { type: String },
		password: { type: String },
		profilePic: { type: String },
		coverPic: { type: String },
		friends: [{ type: Schema.Types.ObjectId, ref: "User" }],
	},
	{ timestamps: true },
);
module.exports = mongoose.model("User", UserSchema);
