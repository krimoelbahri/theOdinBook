import React from "react";
import { Container } from "../styles/SearchBar.styled";

function SearchBar() {
	return (
		<Container>
			<i className='fa-solid fa-magnifying-glass'></i>
			<input type='text' placeholder='Search' />
		</Container>
	);
}

export default SearchBar;
