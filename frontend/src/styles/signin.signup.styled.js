import styled from "styled-components";

export const Container = styled.div`
	width: 60%;
	height: 90vh;
	margin: 10px auto;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
export const Form = styled.form`
	width: 100%;
	margin: 10px auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	input,
	label {
		width: 50%;
		height: 30px;
		line-height: 20px;
		margin: 1px 0 3px 0;
		font-size: 15px;
	}
	button {
		width: 50%;
		height: 30px;
		margin: 5px 0;
	}
`;
export const FacebookButton = styled.button`
	width: 50%;
	height: 30px;
	margin: 5px 0;
	border: none;
	background-color: blue;
	color: white;
`;
