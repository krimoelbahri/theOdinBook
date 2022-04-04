const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema(
	{
		title: { type: String, required: true },
		text: { type: String, required: true },
		status: { type: String, required: true },
		comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
		author: { type: Schema.Types.ObjectId, ref: "User" },
	},
	{ timestamps: true },
);

module.exports = mongoose.model("Post", PostSchema);
