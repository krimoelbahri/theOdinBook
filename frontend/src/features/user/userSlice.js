import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userServices from "./userServices";
let user = localStorage.getItem("user") || null;
let state = {
	user: user,
	isError: false,
	isDone: false,
	isLoading: false,
	message: "",
};
export const signup = createAsyncThunk("register/user", async (data, thunkAPI) => {
	try {
		await userServices.signup(data);
	} catch (error) {
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
	},
	extraReducers(builder) {
		builder
			.addCase(signup.pending, (state) => {
				state.isLoading = true;
				state.isDone = false;
				state.isError = false;
			})
			.addCase(signup.fulfilled, (state, action) => {
				state.user = action.payload;
				state.isDone = true;
				state.isLoading = false;
				state.isError = false;
			})
			.addCase(signup.rejected, (state, action) => {
				state.message = action.payload;
				state.user = null;
				state.isDone = false;
				state.isLoading = false;
				state.isError = true;
			});
	},
});
export const { reset } = userSlice.actions;
export default userSlice.reducer;
