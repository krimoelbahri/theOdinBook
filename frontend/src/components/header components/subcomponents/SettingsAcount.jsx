import { useSelector, useDispatch } from "react-redux";
import { handleSettingDD } from "../../../features/dropDown/dropDownSlice";
import { SettingsContainer, ArrowContainer } from "../../../styles/Header/SettingsAccount-styled";
import SettingDropDown from "./SettingDropDown";

function Setting() {
	const { settingsDD } = useSelector((state) => state.dropDown);
	const dispatch = useDispatch();
	function handleDropDown() {
		if (settingsDD) dispatch(handleSettingDD(false));
		if (!settingsDD) {
			dispatch(handleSettingDD(true));
		}
	}
	function handleBlur(e) {
		const currentTarget = e.currentTarget;
		setTimeout(() => {
			if (!currentTarget.contains(document.activeElement)) {
				dispatch(handleSettingDD(false));
			}
		}, 0);
	}
	return (
		<SettingsContainer
			tabIndex={"1"}
			onFocus={() => console.log("focused")}
			onBlur={handleBlur}
		>
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
