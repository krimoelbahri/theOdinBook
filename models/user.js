import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
	{
		name: { type: String },
		email: { type: String },
		facebookId: { type: String },
		password: { type: String },
		profilePic: { type: Object },
		coverPic: { type: Object },
		friends: [{ type: Schema.Types.ObjectId, ref: "User" }],
		friendRequests: [{ type: Schema.Types.ObjectId, ref: "User" }],
	},
	{ timestamps: true },
);
const User = models.User || model("User", UserSchema);

export default User;
