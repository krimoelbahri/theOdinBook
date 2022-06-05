import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	position: relative;
	top: 60px;
	height: calc(100% - 60px);
	padding-top: 20px;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
`;

/* LeftBar styling */
export const LBContainer = styled.div`
	width: 20%;
	min-height: 300px;
	background-color: white;
	position: fixed;
	left: 20px;
`;
/* Main styling */
export const MainContainer = styled.div`
	width: 50%;
	min-height: 200%;
`;
/* RightBar styling */
export const RBContainer = styled.div`
	width: 20%;
	min-height: 300px;
	background-color: white;
	position: fixed;
	right: 20px;
`;
