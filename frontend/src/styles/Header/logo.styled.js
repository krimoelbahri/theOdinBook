import styled from "styled-components";

export const LogoContainer = styled.div`
	width: 40px;
	height: 40px;
	margin: 10px 10px;
	border-radius: 50%;
	background-color: ${({ theme }) => theme.cardsBGC};
	position: fixed;
	left: 0;
	h4 {
		padding: 9px 7px;
		font-size: 20px;
		font-style: italic;
		font-weight: bold;
		font-family: "klavika";
		color: ${({ theme }) => theme.headerBGC};
	}
`;
