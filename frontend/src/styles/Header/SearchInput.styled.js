import styled from "styled-components";

export const SearchContainer = styled.div`
	width: 200px;
	height: 40px;
	margin: 10px 10px;
	position: fixed;
	left: 60px;
	padding: 2px 5px;
	background-color: #efefef;
	border-radius: 20px;
	display: flex;
	flex-direction: row;
	align-items: center;
	@media (max-width: 1000px) {
		width: 40px;
		border-radius: 50%;
		cursor: pointer;
		input {
			display: none;
		}
	}
	input {
		background-color: #efefef;
		width: 80%;
		height: 100%;
		border: none;
		outline: none;
	}
	i {
		margin: 0px 5px;
		opacity: 0.4;
	}
`;
