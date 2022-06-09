import React from "react";
import { SearchContainer } from "../../../styles/Header";

function SearchInput() {
	return (
		<SearchContainer>
			<i className='fa-solid fa-magnifying-glass'></i>
			<input type='text' placeholder='Search B-Social' />
		</SearchContainer>
	);
}

export default SearchInput;
