const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema(
	{
		description: { type: String, required: true },
		postImage: { type: Object, required: true },
		comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
		likes: [{ type: Schema.Types.ObjectId, ref: "User" }],
		author: { type: Schema.Types.ObjectId, ref: "User" },
	},
	{ timestamps: true },
);

module.exports = mongoose.model("Post", PostSchema);
