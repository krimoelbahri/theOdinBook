import React from "react";
import { RBContainer } from "../../styles/home.styled";

function RightBar() {
	return (
		<RBContainer>
			<div className='subDiv contacts'>
				<h5>Contacts</h5>
				<i className='fa-solid fa-address-book'></i>
			</div>
			<div className='subDiv types'>
				<div>
					<h6>Primary</h6>
				</div>
				<div>
					<h6>Suggested</h6>
				</div>
			</div>
			<div>{/* TODO: adding profiles components*/}</div>
		</RBContainer>
	);
}

export default RightBar;
