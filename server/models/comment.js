const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema(
	{
		text: { type: String, required: true },
		author: String,
	},
	{ timestamps: true },
);

module.exports = mongoose.model("Comment", CommentSchema);
