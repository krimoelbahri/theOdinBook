import { createSlice } from "@reduxjs/toolkit";
let initialState = {
	postModal: false,
	coverPicModal: false,
	profilePicModal: false,
};
let modalSlice = createSlice({
	name: "Modal",
	initialState,
	reducers: {
		resetModals: (state) => {
			state = initialState;
		},
		handlePostModal: (state, actions) => {
			state.postModal = actions.payload;
		},
		handleCPModal: (state, actions) => {
			state.coverPicModal = actions.payload;
		},
		handlePPModal: (state, actions) => {
			state.profilePicModal = actions.payload;
		},
	},
});
export const { handlePostModal, handlePPModal, handleCPModal, resetModals } = modalSlice.actions;
export default modalSlice.reducer;
