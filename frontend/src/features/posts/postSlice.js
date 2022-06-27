import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postServices from "./postServices";
let state = {
	post: { posts: null, isError: false, isDone: false, isLoading: false, message: "" },
	addPost: { response: null, isError: false, isDone: false, isLoading: false, message: "" },
};

export const getPosts = createAsyncThunk("get/allPosts", async (_, thunkAPI) => {
	try {
		let response = await postServices.getPosts();
		return response;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.response.data.message);
	}
});
export const addPost = createAsyncThunk("add/Post", async (data, thunkAPI) => {
	try {
		let response = await postServices.addPost(data);
		return response;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.response.data.message);
	}
});

let postSlice = createSlice({
	name: "post",
	initialState: state,
	reducers: {
		resetPost: ({ post }) => {
			post.isError = false;
			post.isDone = false;
			post.isLoading = false;
			post.message = "";
		},
		resetAddPost: ({ addPost }) => {
			addPost.isError = false;
			addPost.isDone = false;
			addPost.isLoading = false;
			addPost.message = "";
		},
	},
	extraReducers(builder) {
		builder
			.addCase(getPosts.pending, ({ post }) => {
				post.isLoading = true;
			})
			.addCase(getPosts.fulfilled, ({ post }, action) => {
				post.posts = action.payload;
				post.isDone = true;
				post.isLoading = false;
			})
			.addCase(getPosts.rejected, ({ post }, action) => {
				post.message = action.payload;
				post.posts = null;
				post.isDone = false;
				post.isLoading = false;
				post.isError = true;
			})
			.addCase(addPost.pending, ({ addPost }) => {
				addPost.isLoading = true;
			})
			.addCase(addPost.fulfilled, ({ addPost, action }) => {
				addPost.response = action.payload;
				addPost.isDone = true;
				addPost.isLoading = false;
			})
			.addCase(addPost.rejected, ({ addPost }, action) => {
				addPost.message = action.payload;
				addPost.isDone = false;
				addPost.isLoading = false;
				addPost.isError = true;
			});
	},
});
export const { reset } = postSlice.actions;
export default postSlice.reducer;
