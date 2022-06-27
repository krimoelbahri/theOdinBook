import { createSlice } from "@reduxjs/toolkit";
let initialState = {
	settingsDD: false,
	searchDD: false,
	settingsDDContent: "main",
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
		handleSettingDDContent: (state, actions) => {
			state.settingsDDContent = actions.payload;
		},
	},
});
export const { handleSettingDD, handleSearchDD, handleSettingDDContent } = dropDownSlice.actions;
export default dropDownSlice.reducer;
