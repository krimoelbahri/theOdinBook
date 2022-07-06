import { useSelector, useDispatch } from "react-redux";
import { useClickOutside } from "@mantine/hooks";
import { handleSettingDD, handleSettingDDContent } from "../../../features/dropDown/dropDownSlice";
import { SettingsContainer, ArrowContainer } from "../../../styles/Header/SettingsAccount-styled";
import SettingDropDown from "./SettingDropDown";

function Setting() {
	const { settingsDD } = useSelector((state) => state.dropDown);
	const DD = useClickOutside(() => {
		dispatch(handleSettingDD(false));
		dispatch(handleSettingDDContent("main"));
	});

	const dispatch = useDispatch();
	function handleDropDown() {
		if (settingsDD) {
			dispatch(handleSettingDD(false));
			dispatch(handleSettingDDContent("main"));
		}
		if (!settingsDD) {
			dispatch(handleSettingDD(true));
		}
	}
	return (
		<SettingsContainer ref={DD}>
			<ArrowContainer onClick={handleDropDown} active={settingsDD}>
				<div className='arrow'>
					<i className='fa-solid fa-caret-down'></i>
				</div>
			</ArrowContainer>
			{settingsDD && <SettingDropDown />}
		</SettingsContainer>
	);
}

export default Setting;
