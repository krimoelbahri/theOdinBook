import styled from "styled-components";

export const Container = styled.div`
	height: 60px;
	width: 100%;
	position: fixed;
	top: 0;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
	background-color: #2d9dd3;
	h4 {
		font-size: 30px;
		font-style: italic;
		font-weight: bold;
		font-family: "klavika";
		color: white;
	}
	.logo {
		@media (max-width: 600px) {
			display: none;
		}
	}
	.logo-mobile {
		display: none;
		@media (max-width: 600px) {
			display: block;
		}
	}
`;
