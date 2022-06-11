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
`;
export const ShortcutDiv = styled.div`
	width: 22%;
	height: 100%;
	border-bottom: ${(props) => (props.active ? "4px solid white" : null)};
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
		}
	}
`;
