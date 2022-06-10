import { useState } from "react";
import {
	SettingsContainer,
	ArrowContainer,
	SettingsDropDownContainer,
} from "../../../styles/Header/SettingsAccount-styled";
import SettingDropDown from "./SettingDropDown";

function Setting() {
	const [showDD, setShowDD] = useState(false); //DD = DropDown
	function handleDropDown() {
		setShowDD(!showDD);
	}
	return (
		<SettingsContainer>
			<ArrowContainer onClick={handleDropDown} active={showDD}>
				<i className='fa-solid fa-caret-down'></i>
			</ArrowContainer>
			<SettingsDropDownContainer active={showDD}>
				<SettingDropDown />
			</SettingsDropDownContainer>
		</SettingsContainer>
	);
}

export default Setting;
