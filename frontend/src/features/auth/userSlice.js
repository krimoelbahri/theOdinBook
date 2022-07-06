import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userServices from "./userServices";
let user = JSON.parse(localStorage.getItem("user"));
let state = {
	user: user ? user : null,
	profileUser: null,
	isError: false,
	isDone: false,
	isLoading: false,
	message: "",
};

export const getUser = createAsyncThunk("get/user", async (data, thunkAPI) => {
	try {
		let response = await userServices.getUser(data);
		return response;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.response.data.message);
	}
});
export const getUsers = createAsyncThunk("get/users", async (_, thunkAPI) => {
	try {
		let response = await userServices.getUsers();
		return response;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.response.data.message);
	}
});
export const signup = createAsyncThunk("register/user", async (data, thunkAPI) => {
	try {
		let response = await userServices.signup(data);
		return response;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.response.data.message);
	}
});
export const signin = createAsyncThunk("signin/user", async (data, thunkAPI) => {
	try {
		let response = await userServices.signin(data);
		return response;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.response.data.message);
	}
});
export const facebookSignin = createAsyncThunk("facebokSignin/user", async (_, thunkAPI) => {
	try {
		let response = await userServices.facebookSignin();
		return response;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.response.data.message);
	}
});
export const logout = createAsyncThunk("logout/user", async (_, thunkAPI) => {
	try {
		let response = await userServices.logout();
		return response;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.response.data.message);
	}
});

let userSlice = createSlice({
	name: "user",
	initialState: state,
	reducers: {
		reset: (state) => {
			state.profileUser = null;
			state.isError = false;
			state.isDone = false;
			state.isLoading = false;
			state.message = "";
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
			.addCase(getUser.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getUser.fulfilled, (state, action) => {
				state.profileUser = action.payload;
				state.isDone = true;
				state.isLoading = false;
			})
			.addCase(getUser.rejected, (state, action) => {
				state.message = action.payload;
				state.profileUser = null;
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
			})
			.addCase(facebookSignin.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(facebookSignin.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isDone = true;
				state.user = action.payload;
			})
			.addCase(facebookSignin.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
				state.user = null;
			})
			.addCase(logout.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(logout.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isDone = true;
				state.user = action.payload.user;
			})
			.addCase(logout.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			});
	},
});
export const { reset } = userSlice.actions;
export default userSlice.reducer;
