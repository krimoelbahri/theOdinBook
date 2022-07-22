import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postServices from "./postServices";
let state = {
	post: { posts: [], isError: false, isDone: false, isLoading: false, message: "" },
};

export const addingPost = createAsyncThunk("add/Post", async (data, thunkAPI) => {
	const { description, author, imgFile } = data;
	let formData = new FormData();
	formData.append("imgFile", imgFile);
	try {
		let data = await postServices.uploadImage(formData);
		let response = await postServices.addPost({ description, author, postImage: data });
		return response;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.response.data.message);
	}
});
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
export const deletePost = createAsyncThunk("add/comment", async (postId, thunkAPI) => {
	try {
		let response = await postServices.deletePost(postId);
		return response;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.response.data.message);
	}
});

let postSlice = createSlice({
	name: "post",
	initialState: state,
	reducers: {
		addPosts: ({ post }, action) => {
			post.posts.unshift(action.payload);
		},
		removePost: ({ post }, action) => {
			post.posts.splice(action.payload, 1);
		},
	},
});
export const { resetPost, resetAddPost, removePost, addPosts } = postSlice.actions;
export default postSlice.reducer;
