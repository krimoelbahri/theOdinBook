import { configureStore } from "@reduxjs/toolkit";
import dropDownReducer from "../features/dropDown/dropDownSlice";
import modalReducer from "../features/Modal/modalSlice";
import { postApi } from "../features/posts/post-api-query";
import { userApi } from "../features/auth/user-api-query";

import { setupListeners } from "@reduxjs/toolkit/dist/query";
export const store = configureStore({
	reducer: {
		dropDown: dropDownReducer,
		modal: modalReducer,
		[postApi.reducerPath]: postApi.reducer,
		[userApi.reducerPath]: userApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(postApi.middleware).concat(userApi.middleware),
});

setupListeners(store.dispatch);
