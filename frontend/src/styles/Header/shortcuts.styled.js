import styled from "styled-components";

export const ShortcutsContainer = styled.div`
	width: 34%;
	height: 60px;
	margin: 0px 33%;
	position: fixed;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	@media (max-width: 700px) {
		width: 100vw;
		background-color: ${({ theme }) => theme.cardsBGC};
		box-shadow: ${({ theme }) => theme.mainBS};
		padding: 5px 30px;
		bottom: 0;
		margin: 0;
	}
`;
export const ShortcutDiv = styled.div`
	width: 22%;
	height: 100%;
	border-bottom: ${(props) => (props.active ? "4px solid white" : null)};
	@media (max-width: 700px) {
		border-bottom: ${({ theme, active }) => (active ? `4px solid ${theme.headerBGC}` : null)};
	}
	.item-holder {
		width: 100%;
		height: 54px;
		margin-top: 2px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 5px;
		:hover {
			cursor: pointer;
			background-color: ${({ theme, active }) => (active ? null : theme.hoverBGC)};
		}
		i {
			font-size: 23px;
			color: ${(props) => (props.active ? "white" : "black")};
			@media (max-width: 700px) {
				color: ${({ theme, active }) => (active ? theme.headerBGC : "black")};
			}
		}
	}
`;
