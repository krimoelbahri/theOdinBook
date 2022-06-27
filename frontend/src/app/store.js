import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/auth/userSlice";
import dropDownReducer from "../features/dropDown/dropDownSlice";
import modalReducer from "../features/Modal/modalSlice";
import postReducer from "../features/posts/postSlice";
export const store = configureStore({
	reducer: {
		user: userReducer,
		post: postReducer,
		dropDown: dropDownReducer,
		modal: modalReducer,
	},
});
