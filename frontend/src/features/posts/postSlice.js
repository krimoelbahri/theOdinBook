import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postServices from "./postServices";
let state = {};

export const addingComment = createAsyncThunk("add/comment", async (data, thunkAPI) => {
	const { text, author, postId } = data;
	try {
		let response = await postServices.addComment({ text, author }, postId);
		return response;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.response.data.message);
	}
});
export const deletingComment = createAsyncThunk("delete/comment", async (data, thunkAPI) => {
	const { commentId, postId } = data;
	try {
		let response = await postServices.deleteComment(commentId, postId);
		return response;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.response.data.message);
	}
});
export const addingLike = createAsyncThunk("add/comment", async (data, thunkAPI) => {
	const { userId, postId } = data;
	try {
		let response = await postServices.addLike(userId, postId);
		return response;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.response.data.message);
	}
});

let postSlice = createSlice({
	name: "post",
	initialState: state,
	reducers: {},
});
export const { resetPost, resetAddPost, removePost, addPosts } = postSlice.actions;
export default postSlice.reducer;
