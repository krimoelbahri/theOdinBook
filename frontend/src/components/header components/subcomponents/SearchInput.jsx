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
	return (
		<SearchDDContainer active={active}>
			<DDheader>
				<Arrow>
					<i className='fa-solid fa-arrow-left'></i>
				</Arrow>
				<SearchContainer>
					<i className='fa-solid fa-magnifying-glass'></i>
					<input type='text' placeholder='Search B-Social' />
				</SearchContainer>
			</DDheader>
			<SearchDD>
				<div className='recent'>
					<h4>Recent Searches</h4>
				</div>
			</SearchDD>
		</SearchDDContainer>
	);
}

export default SearchInput;
