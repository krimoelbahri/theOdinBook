import styled from "styled-components";

export const SearchDDContainer = styled.div`
	width: 320px;
	z-index: ${({ active }) => (active ? 12 : null)};
	border-radius: 0 10px 10px 10px;
	background-color: ${({ theme, active }) => (active ? theme.cardsBGC : "transparent")};
	box-shadow: ${({ theme, active }) => (active ? theme.mainBSb : null)};
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
	justify-content: start;
`;
export const Arrow = styled.div`
	border-radius: 50%;
	padding: 10px;
	margin: 0 10px;
	display: ${({ active }) => (active ? "block" : "none")};
	:hover {
		background-color: ${({ theme }) => theme.hoverBGC};
		cursor: pointer;
	}
`;

export const SearchContainer = styled.div`
	width: ${({ active }) => (active ? "240px" : "220px")};
	height: 40px;
	padding: 5px 5px;
	background-color: ${({ theme }) => theme.searchBGC};
	border-radius: 20px;
	display: flex;
	flex-direction: row;
	align-items: center;
	//transition: width 0.1s;

	@media (max-width: 1000px) {
		width: ${({ active }) => (active ? "240px" : "40px")};
		border-radius: ${({ active }) => (active ? "20px" : "50%")};
		cursor: pointer;
	}
	input {
		background-color: ${({ theme }) => theme.searchBGC};
		width: ${({ iconOpacity }) => (iconOpacity ? "180px" : "210px")};
		height: 90%;
		border: none;
		outline: none;
		transition: width 0.2s;
		@media (max-width: 1000px) {
			display: ${({ active }) => {
				if (!active) return "none";
			}};
		}
	}
	i {
		width: ${({ iconOpacity }) => (iconOpacity ? "16px" : "0")};
		margin: 0px 5px;
		opacity: ${({ iconOpacity }) => (iconOpacity ? "0.4" : "0")};
		transition: all 0.2s;
		cursor: pointer;
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
