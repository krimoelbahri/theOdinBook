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
export const friendRequest = createAsyncThunk("friend-request/user", async (data, thunkAPI) => {
	try {
		let response = await userServices.friendRequest(data);
		return response;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.response.data.message);
	}
});
export const friendRequestreply = createAsyncThunk(
	"friend-request-reply/user",
	async (data, thunkAPI) => {
		try {
			let response = await userServices.friendRequestreply(data);
			return response;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response.data.message);
		}
	},
);

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
		updateUser: (state, action) => {
			state.user = { ...state.user, ...action.payload };
			localStorage.setItem("user", JSON.stringify(state.user));
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
export const { reset, updateUser } = userSlice.actions;
export default userSlice.reducer;
