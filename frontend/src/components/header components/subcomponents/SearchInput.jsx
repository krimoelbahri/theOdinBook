import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showSearchDD, hideSearchDD } from "../../../features/dropDown/dropDownSlice";
import {
	SearchContainer,
	SearchDDContainer,
	DDheader,
	SearchDD,
	Arrow,
} from "../../../styles/Header";

function SearchInput() {
	const [opacity, setOpacity] = useState(true);
	const { searchDD } = useSelector((state) => state.dropDown);
	const dispatch = useDispatch();
	function hideDropDown() {
		if (searchDD) dispatch(hideSearchDD());
	}
	function showDropDown() {
		if (!searchDD) dispatch(showSearchDD());
	}
	return (
		<SearchDDContainer active={searchDD}>
			<DDheader active={searchDD}>
				<Arrow active={searchDD} onClick={hideDropDown}>
					<i className='fa-solid fa-arrow-left'></i>
				</Arrow>
				<SearchContainer onClick={showDropDown} iconOpacity={opacity} active={searchDD}>
					<i className='fa-solid fa-magnifying-glass'></i>
					<input
						type='text'
						placeholder='Search B-Social'
						onFocus={() => setOpacity(false)}
						onBlur={() => setOpacity(true)}
					/>
				</SearchContainer>
			</DDheader>
			<SearchDD active={searchDD}>
				<div className='recent'>
					<h4>Recent Searches</h4>
				</div>
			</SearchDD>
		</SearchDDContainer>
	);
}

export default SearchInput;
