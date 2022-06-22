import { useSelector, useDispatch } from "react-redux";
import { showSettingDD, hideSettingDD } from "../../../features/dropDown/dropDownSlice";

import {
	SettingsContainer,
	ArrowContainer,
	SettingsDropDownContainer,
} from "../../../styles/Header/SettingsAccount-styled";
import SettingDropDown from "./SettingDropDown";

function Setting() {
	const { settingsDD } = useSelector((state) => state.dropDown);
	const dispatch = useDispatch();
	function handleDropDown() {
		if (settingsDD) dispatch(hideSettingDD());
		if (!settingsDD) dispatch(showSettingDD());
	}
	return (
		<SettingsContainer>
			<ArrowContainer onClick={handleDropDown} active={settingsDD}>
				<i className='fa-solid fa-caret-down'></i>
			</ArrowContainer>
			<SettingsDropDownContainer active={settingsDD}>
				<SettingDropDown />
			</SettingsDropDownContainer>
		</SettingsContainer>
	);
}

export default Setting;
