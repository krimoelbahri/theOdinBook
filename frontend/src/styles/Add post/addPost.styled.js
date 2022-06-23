import styled from "styled-components";

export const Container = styled.div`
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	z-index: 100;
	background-color: ${({ theme }) => theme.modalContainerBGC};
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const ModalContainer = styled.form`
	width: 500px;
	min-height: 400px;
	max-height: 500px;
	border-radius: 10px;
	background-color: ${({ theme }) => theme.cardsBGC};
	display: flex;
	flex-direction: column;
	.top-section {
		display: flex;
		flex-direction: column;
	}
`;
export const ModalHeader = styled.div`
	width: 100%;
	height: 60px;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	h2 {
		font-size: 1.5em;
		font-weight: 500;
	}
	.item {
		width: 35px;
		height: 35px;
		padding: 5px;
		border-radius: 50%;
		background-color: gray;
		position: absolute;
		right: 15px;
		display: flex;
		justify-content: center;
		align-items: center;
		i {
			font-size: 1.3em;
		}
	}
`;
export const ModalProfileDiv = styled.div`
	width: 100%;
	height: 60px;
	padding: 0 15px;
	display: flex;
	flex-direction: row;
	align-items: center;
	img {
		width: 35px;
		height: 35px;
		margin-right: 20px;
		border-radius: 50%;
		border: 1px solid;
	}
	p {
		font-size: 14px;
	}
	.name {
		font-weight: bold;
	}
`;
export const ModalMediaSectionContainer = styled.div`
	width: 100%;
	flex-grow: 1;
	padding: 5px 15px;
	overflow-y: scroll;
`;
export const ModalTextarea = styled.div`
	width: 100%;
`;
export const ModalMediaarea = styled.div`
	width: 100%;
	min-height: 200px;
	border: 1px solid gray;
	border-radius: 10px;
	padding: 5px;
`;
