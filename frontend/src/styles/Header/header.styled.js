import styled from "styled-components";

export const Container = styled.div`
	height: 60px;
	width: 100vw;
	position: fixed;
	top: 0;
	z-index: 10;
	background-color: ${({ theme }) => theme.headerBGC};
`;
