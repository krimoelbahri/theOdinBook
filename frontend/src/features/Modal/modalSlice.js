import { createSlice } from "@reduxjs/toolkit";
let initialState = {
	postModal: false,
};
let modalSlice = createSlice({
	name: "Modal",
	initialState,
	reducers: {
		handlePostModal: (state, actions) => {
			state.postModal = actions.payload;
		},
	},
});
export const { handlePostModal } = modalSlice.actions;
export default modalSlice.reducer;
