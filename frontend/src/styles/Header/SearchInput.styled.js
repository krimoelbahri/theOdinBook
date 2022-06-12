import styled from "styled-components";
let boxShadow = "0px 0px 4px 1px rgba(209, 194, 194, 1)";

export const SearchDDContainer = styled.div`
	width: 320px;
	border-radius: 0 10px 10px 10px;
	background-color: ${({ active }) => (active ? "white" : "transparent")};
	box-shadow: ${({ active }) => (active ? boxShadow : null)};
	position: fixed;
	left: 0px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
export const DDheader = styled.div`
	height: 60px;
	margin-left: ${({ active }) => (active ? "0px" : "60px")};
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-evenly;
`;
export const Arrow = styled.div`
	border-radius: 50%;
	padding: 10px;
	display: ${({ active }) => (active ? "block" : "none")};
	:hover {
		background-color: #efefef;
		cursor: pointer;
	}
`;

export const SearchContainer = styled.div`
	width: ${({ active }) => (active ? "240px" : "220px")};
	height: 40px;
	padding: 4px 5px;
	background-color: #efefef;
	border-radius: 20px;
	display: flex;
	flex-direction: row;
	align-items: center;
	transition: width 0.2s;

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
		width: ${({ opacity }) => (opacity ? "200px" : "210px")};
		height: 90%;
		border: none;
		outline: none;
		transition: all 0.2s;
	}
	i {
		width: ${({ opacity }) => (opacity ? "16px" : "0")};
		margin: 0px 5px;
		opacity: ${({ opacity }) => (opacity ? "0.4" : "0")};
		transition: all 0.2s;
		cursor: pointer;
	}
`;
export const SearchDD = styled.div`
	width: 100%;
	display: ${({ active }) => (active ? "flex" : "none")};
	flex-direction: column;
	.recent {
		height: 40px;
		width: 100%;
		padding: 5px 15px;
	}
`;
