import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userServices from "./userServices";
let state = {};

export const facebookSignin = createAsyncThunk("facebokSignin/user", async (_, thunkAPI) => {
	try {
		let response = await userServices.facebookSignin();
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
	reducers: {},
});
export default userSlice.reducer;
