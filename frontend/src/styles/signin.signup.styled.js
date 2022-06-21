import styled from "styled-components";

export const Container = styled.div`
	width: 60%;
	position: relative;
	top: 60px;
	margin: 10px auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	@media (max-width: 600px) {
		width: 90%;
	}
`;
export const Form = styled.form`
	width: 100%;
	margin: 10px auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	input,
	label,
	button {
		width: 400px;
		height: 30px;
		line-height: 20px;
		margin: 1px 0 3px 0;
		font-size: 15px;
		@media (max-width: 600px) {
			width: 70%;
		}
	}
	button {
		background-color: ${({ theme }) => theme.headerBGC};
		border: 1px solid blue;
		cursor: pointer;
		color: white;
		font-family: "klavika";
		font-weight: bold;
		font-size: medium;
	}
`;
export const FacebookButton = styled.button`
	width: 400px;
	height: 30px;
	margin: 5px 0;
	border: none;
	background-color: blue;
	color: white;
	font-family: "klavika";
	font-weight: bold;
	font-size: medium;
	@media (max-width: 600px) {
		width: 70%;
	}
`;
