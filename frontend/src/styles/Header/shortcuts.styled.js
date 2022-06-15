import styled from "styled-components";
let boxShadow = "0px 0px 4px 1px rgba(209, 194, 194, 1)";

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
		width: 100%;
		background-color: transparent;
		box-shadow: ${boxShadow};
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
		border-bottom: ${(props) => (props.active ? "4px solid #2d9dd3" : null)};
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
			background-color: ${(props) => (props.active ? null : "rgb(180 180 180 / 50%)")};
		}
		i {
			font-size: 23px;
			color: ${(props) => (props.active ? "white" : "black")};
			@media (max-width: 700px) {
				color: ${(props) => (props.active ? "#2d9dd3" : "black")};
			}
		}
	}
`;
