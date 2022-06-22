import { useSelector, useDispatch } from "react-redux";
import { hideSettingDD, hideSearchDD } from "../features/dropDown/dropDownSlice";
import { Container } from "../styles/hideDD.styled";

export default function HideDD() {
	const { searchDD, settingsDD } = useSelector((state) => state.dropDown);
	const dispatch = useDispatch();
	function handleDropDown() {
		if (searchDD) dispatch(hideSearchDD());
		if (settingsDD) dispatch(hideSettingDD());
	}

	return <Container onClick={handleDropDown} active={searchDD || settingsDD}></Container>;
}
