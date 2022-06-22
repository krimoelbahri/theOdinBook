import { createSlice } from "@reduxjs/toolkit";
let initialState = {
	settingsDD: false,
	searchDD: false,
};
let dropDownSlice = createSlice({
	name: "dropDown",
	initialState,
	reducers: {
		showSettingDD: (state) => {
			state.settingsDD = true;
		},
		showSearchDD: (state) => {
			state.searchDD = true;
		},
		hideSettingDD: (state) => {
			state.settingsDD = false;
		},
		hideSearchDD: (state) => {
			state.searchDD = false;
		},
	},
});
export const { showSettingDD, hideSettingDD, showSearchDD, hideSearchDD } = dropDownSlice.actions;
export default dropDownSlice.reducer;
