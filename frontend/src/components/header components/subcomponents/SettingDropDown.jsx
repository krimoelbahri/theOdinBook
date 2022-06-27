import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { SettingsDropDownContainer } from "../../../styles/Header/SettingsAccount-styled";
import DisplayDD from "./DisplayDD";
import MainDD from "./MainDD";
import SettingDD from "./SettingDD";

function SettingDropDown() {
	const { settingsDDContent } = useSelector((state) => state.dropDown);
	const [height, setHeight] = useState("250px");
	useEffect(() => {
		if (settingsDDContent === "main") setHeight("250px");
		if (settingsDDContent === "display") setHeight("300px");
		if (settingsDDContent === "setting") setHeight("350px");
	}, [settingsDDContent]);

	return (
		<SettingsDropDownContainer height={height}>
			{settingsDDContent === "main" && <MainDD />}
			{settingsDDContent === "display" && <DisplayDD />}
			{settingsDDContent === "setting" && <SettingDD />}
		</SettingsDropDownContainer>
	);
}

export default SettingDropDown;
