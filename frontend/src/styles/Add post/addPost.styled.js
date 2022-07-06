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
	position: relative;
	border-radius: 10px;
	background-color: ${({ theme }) => theme.cardsBGC};
	display: flex;
	flex-direction: column;
	.top-section {
		display: flex;
		flex-direction: column;
	}
`;
export const Loader = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	opacity: 0.8;
	background-color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	i {
		font-size: xx-large;
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
		background-color: ${({ theme }) => theme.iconBGC};
		position: absolute;
		right: 15px;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		:hover {
			background-color: ${({ theme }) => theme.hoverBGC};
		}
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
		margin-right: 10px;
		border-radius: 50%;
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
	color: ${({ theme }) => theme.placeHolderColor};
	font-size: 1.5rem;
`;
export const ModalMediaarea = styled.div`
	width: 100%;
	position: relative;
	display: ${({ active }) => (active ? "flex" : "none")};
	border: 1px solid gray;
	border-radius: 10px;
	padding: 7px;
	.item {
		width: 25px;
		height: 25px;
		z-index: 1;
		padding: 5px;
		border-radius: 50%;
		background-color: ${({ theme }) => theme.cardsBGC};
		position: absolute;
		top: 15px;
		right: 15px;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		i {
			font-size: 1em;
		}
	}
`;
export const AddPhotoContainer = styled.div`
	width: 100%;
	min-height: 180px;
	max-height: 700px;
	position: relative;
	background-color: ${({ theme }) => theme.iconBGC};
	border-radius: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	:hover {
		background-color: ${({ theme }) => theme.hoverBGC};
	}
	img {
		width: 100%;
		height: 100%;
		border-radius: 10px;
		cursor: auto;
	}
`;
export const AddPhotoInput = styled.div`
	height: 70px;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	i {
		font-size: x-large;
	}
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
