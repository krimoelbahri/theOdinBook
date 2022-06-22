import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/auth/userSlice";
import dropDownReducer from "../features/dropDown/dropDownSlice";

export const store = configureStore({
	reducer: {
		user: userReducer,
		dropDown: dropDownReducer,
	},
});
