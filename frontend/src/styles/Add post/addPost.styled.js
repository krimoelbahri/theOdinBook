import styled from "styled-components";

export const Container = styled.div`
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	z-index: 100;
	background-color: ${({ theme }) => theme.modalContainerBGC};
	display: ${({ active }) => (active ? "flex" : "none")};
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
		cursor: pointer;
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
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	padding: 5px 15px;
	overflow-y: auto;
	:hover {
		::-webkit-scrollbar-thumb {
			background-color: rgb(214, 214, 214);
		}
	}
	::-webkit-scrollbar {
		width: 10px;
	}
	::-webkit-scrollbar-track {
		background-color: transparent;
	}
	::-webkit-scrollbar-thumb {
		border-radius: 10px;
		transition: all 1s;
	}
`;
export const ModalTextarea = styled.div`
	width: 100%;
	position: relative;
	flex-grow: 1;
	cursor: text;
`;
export const Textarea = styled.div`
	line-height: 30px;
	margin-bottom: 20px;
	outline: none;
`;
export const TextareaPlaceHolder = styled.div`
	width: 100%;
	position: absolute;
	top: 3px;
	h3 {
		color: #eee;
		font-size: 20px;
	}
`;
export const ModalMediaarea = styled.div`
	width: 100%;
	min-height: 200px;
	display: ${({ active }) => (active ? "flex" : "none")};
	border: 1px solid gray;
	border-radius: 10px;
	padding: 5px;
`;
export const ModalBottomSectionContainer = styled.div`
	width: 100%;
	min-height: 120px;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	padding: 5px 15px;
`;
export const AddMediaToPost = styled.div`
	width: 100%;
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	padding: 0 15px;
	border: 1px solid grey;
	border-radius: 10px;
	box-shadow: ${({ theme }) => theme.mainBS};
	h3 {
		width: 50%;
	}
	i {
		font-size: larger;
		color: green;
		cursor: pointer;
	}
`;
export const ModalSubmitButton = styled.button`
	width: 100%;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0 15px;
	border: none;
	border-radius: 10px;
	background-color: ${({ theme }) => theme.headerBGC};
	h3 {
		color: white;
		font-weight: bold;
	}
`;
