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
	div {
		width: 22%;
		height: 100%;
		border-bottom: 4px solid white; //TODO: only when active
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
				background-color: rgb(180 180 180 / 50%);
			}
			i {
				font-size: 23px;
				color: white;
			}
		}
	}
`;
