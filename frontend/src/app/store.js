import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/auth/userSlice";
import dropDownReducer from "../features/dropDown/dropDownSlice";
import modalReducer from "../features/Modal/modalSlice";
import postReducer from "../features/posts/postSlice";
import { postApi } from "../features/posts/post-api-query";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
export const store = configureStore({
	reducer: {
		user: userReducer,
		post: postReducer,
		dropDown: dropDownReducer,
		modal: modalReducer,
		[postApi.reducerPath]: postApi.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postApi.middleware),
});

setupListeners(store.dispatch);
