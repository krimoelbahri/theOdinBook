import styled from "styled-components";
export const SearchDDContainer = styled.div`
	width: 320px;
	border-radius: 0 10px 10px 10px;
	background-color: white;
	position: fixed;
	left: 0px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
export const DDheader = styled.div`
	height: 60px;
	//margin-left: 60px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-evenly;
`;
export const Arrow = styled.div`
	border-radius: 50%;
	padding: 10px;
	display: block;
	:hover {
		background-color: #efefef;
		cursor: pointer;
	}
`;

export const SearchContainer = styled.div`
	width: 240px;
	height: 40px;
	padding: 4px 10px;
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
		width: 100%;
		height: 90%;
		border: none;
		outline: none;
	}
	i {
		margin: 0px 5px;
		opacity: 0.4;
		display: block;
	}
`;
export const SearchDD = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	.recent {
		height: 40px;
		width: 100%;
		padding: 5px 15px;
	}
`;
