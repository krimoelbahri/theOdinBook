import styled from "styled-components";

export const Container = styled.div`
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	z-index: 11;
	display: ${({ active }) => (active ? "block" : "none")};
`;
