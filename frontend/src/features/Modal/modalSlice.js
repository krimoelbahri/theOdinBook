import { createSlice } from "@reduxjs/toolkit";
let initialState = {
	postModal: false,
};
let modalSlice = createSlice({
	name: "Modal",
	initialState,
	reducers: {
		showPostModal: (state) => {
			state.postModal = true;
		},
		hidePostModal: (state) => {
			state.postModal = false;
		},
	},
});
export const { showPostModal, hidePostModal } = modalSlice.actions;
export default modalSlice.reducer;
