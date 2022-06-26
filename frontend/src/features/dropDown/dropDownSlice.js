import { createSlice } from "@reduxjs/toolkit";
let initialState = {
	settingsDD: false,
	searchDD: false,
};
let dropDownSlice = createSlice({
	name: "dropDown",
	initialState,
	reducers: {
		handleSettingDD: (state, actions) => {
			state.settingsDD = actions.payload;
		},
		handleSearchDD: (state, actions) => {
			state.searchDD = actions.payload;
		},
	},
});
export const { handleSettingDD, handleSearchDD } = dropDownSlice.actions;
export default dropDownSlice.reducer;
