import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	max-width: 900px;
	margin: 0 auto;
	padding: 20px;
	position: relative;
	top: 60px;
`;
export const FriendsHeader = styled.div`
	width: 100%;
	height: 60px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	h1 {
		font-size: x-large;
	}
	button {
		height: 40px;
		border-radius: 5px;
		border: none;
		background-color: ${({ theme }) => theme.cardsBGC};
		box-shadow: ${({ theme }) => theme.mainBS};
		color: #1877f2;
		font-weight: bold;
	}
`;
export const FriendsCardsContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-evenly;
`;
export const CardContainer = styled.div`
	width: 200px;
	height: 350px;
	margin-bottom: 20px;
	border-radius: 10px;
	background-color: ${({ theme }) => theme.cardsBGC};
	box-shadow: ${({ theme }) => theme.mainBS};
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: center;
	.m-b-10 {
		margin-bottom: 10px;
	}
	img {
		width: 200px;
		height: 200px;
		border-radius: 10px 10px 0 0;
	}
	h2 {
		font-size: medium;
		font-weight: 500;
	}
`;
export const CardButton = styled.button`
	width: 80%;
	height: 35px;
	padding: 7px 0;
	text-align: center;
	outline: none;
	border: none;
	border-radius: 5px;
	color: ${({ fontColor }) => fontColor};
	background-color: ${({ bgColor }) => bgColor};
	font-size: 14px;
	font-weight: bold;
`;
