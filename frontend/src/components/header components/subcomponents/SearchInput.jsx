import { useState } from "react";
import {
	SearchContainer,
	SearchDDContainer,
	DDheader,
	SearchDD,
	Arrow,
} from "../../../styles/Header";

function SearchInput() {
	const [active, setActive] = useState(false);
	const [opacity, setOpacity] = useState(true);

	function showDD() {
		if (!active) setActive(true);
	}
	function hideDD() {
		if (active) setActive(false);
	}

	return (
		<SearchDDContainer active={active}>
			<DDheader active={active}>
				<Arrow active={active} onClick={hideDD}>
					<i className='fa-solid fa-arrow-left'></i>
				</Arrow>
				<SearchContainer onClick={showDD} opacity={opacity} active={active}>
					<i className='fa-solid fa-magnifying-glass'></i>
					<input
						type='text'
						placeholder='Search B-Social'
						onFocus={() => setOpacity(false)}
						onBlur={() => setOpacity(true)}
					/>
				</SearchContainer>
			</DDheader>
			<SearchDD active={active}>
				<div className='recent'>
					<h4>Recent Searches</h4>
				</div>
			</SearchDD>
		</SearchDDContainer>
	);
}

export default SearchInput;
