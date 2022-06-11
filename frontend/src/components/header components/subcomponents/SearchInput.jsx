import React from "react";
import { SearchContainer, SearchDDContainer, DDheader, SearchDD } from "../../../styles/Header";

function SearchInput() {
	return (
		<SearchDDContainer>
			<DDheader>
				<div className='arrow'>
					<i className='fa-solid fa-arrow-left'></i>
				</div>
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
