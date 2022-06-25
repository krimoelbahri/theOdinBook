import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/auth/userSlice";
import dropDownReducer from "../features/dropDown/dropDownSlice";
import modalReducer from "../features/Modal/modalSlice";
export const store = configureStore({
	reducer: {
		user: userReducer,
		dropDown: dropDownReducer,
		modal: modalReducer,
	},
});
