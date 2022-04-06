import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userServices from "./userServices";
let user = JSON.parse(localStorage.getItem("user"));
let state = {
	user: user ? user : null,
	isError: false,
	isDone: false,
	isLoading: false,
	message: "",
};

export const signup = createAsyncThunk("register/user", async (data, thunkAPI) => {
	try {
		let response = await userServices.signup(data);
		return response;
	} catch (error) {
		console.log(error.response);
		return thunkAPI.rejectWithValue(error.response.data.message);
	}
});
export const signin = createAsyncThunk("signin/user", async (data, thunkAPI) => {
	try {
		let response = await userServices.signin(data);
		return response;
	} catch (error) {
		console.log(error.response);
		return thunkAPI.rejectWithValue(error.response.data.message);
	}
});

let userSlice = createSlice({
	name: "user",
	initialState: state,
	reducers: {
		reset: (state) => {
			state.isError = false;
			state.isDone = false;
			state.isLoading = false;
			state.message = "";
		},
		logout: (state) => {
			userServices.logout();
			state.user = null;
		},
	},
	extraReducers(builder) {
		builder
			.addCase(signup.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(signup.fulfilled, (state, action) => {
				state.user = action.payload;
				state.isDone = true;
				state.isLoading = false;
			})
			.addCase(signup.rejected, (state, action) => {
				state.message = action.payload;
				state.user = null;
				state.isLoading = false;
				state.isError = true;
			})
			.addCase(signin.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(signin.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isDone = true;
				state.user = action.payload;
			})
			.addCase(signin.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
				state.user = null;
			});
	},
});
export const { reset, logout } = userSlice.actions;
export default userSlice.reducer;
