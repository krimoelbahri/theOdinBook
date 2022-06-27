import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleSearchDD } from "../../../features/dropDown/dropDownSlice";
import handleBlur from "../../../helpers/handleBlur";
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
		if (searchDD) dispatch(handleSearchDD(false));
	}
	function showDropDown() {
		if (!searchDD) dispatch(handleSearchDD(true));
	}

	return (
		<SearchDDContainer
			active={searchDD}
			tabIndex={"1"}
			onBlur={(e) => handleBlur(e, hideDropDown)}
		>
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
			{searchDD && (
				<SearchDD>
					<div className='recent'>
						<h4>Recent Searches</h4>
					</div>
				</SearchDD>
			)}
		</SearchDDContainer>
	);
}

export default SearchInput;
