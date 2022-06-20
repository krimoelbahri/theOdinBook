import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavSectionContainer = styled.div`
	width: 100%;
	height: 60px;
	position: sticky;
	top: 60px;
	background-color: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
export const NavWraper = styled.div`
	width: 100%;
	max-width: 850px;
	height: 100%;
	visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
	position: ${({ pos }) => pos};
	display: flex;
	flex-direction: row;
	align-items: center;
	transition: all 100ms;
`;

export const NavLink = styled(Link)`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	border-bottom: 2px solid blue;
	.wrapper {
		height: calc(100% - 4px);
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 5px 15px;
		border-radius: 3px;
		color: gray;
		font-weight: bold;
		:hover {
			background-color: rgba(215, 215, 215, 0.5);
			cursor: pointer;
		}
	}
`;
