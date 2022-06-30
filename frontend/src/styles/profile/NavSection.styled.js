import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavSectionContainer = styled.div`
	width: 100%;
	height: 60px;
	z-index: 1;
	position: sticky;
	top: 60px;
	background-color: ${({ theme }) => theme.cardsBGC};
`;
export const NavWraper = styled.div`
	width: 100%;
	max-width: 850px;
	height: 100%;
	margin: 0 auto;
	visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
	opacity: ${({ visible }) => (visible ? "1" : "0")};
	transform: ${({ visible, transform }) =>
		transform === "down"
			? visible
				? "translateY(-60px)"
				: null
			: !visible
			? "translateY(-60px)"
			: null};
	display: flex;
	flex-direction: row;
	align-items: center;
	transition: transform 100ms, opacity 400ms;
`;

export const ProfileNavLink = styled(NavLink)`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	border-bottom: ${({ isactive, theme }) => (isactive ? `2px solid ${theme.headerBGC}` : null)};
	.wrapper {
		height: calc(100% - 4px);
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 5px 15px;
		border-radius: 3px;
		color: ${({ isactive, theme }) => (isactive ? theme.headerBGC : "gray")};
		font-weight: bold;
		:hover {
			background-color: ${({ theme }) => theme.hoverBGC};
			cursor: pointer;
		}
	}
`;
