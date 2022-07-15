import styled from "styled-components";

export const TopSectionContainer = styled.div`
	width: 100%;
	height: calc(100vh - 135px);
	position: relative;
	margin-top: 60px;
	margin-bottom: 1px;
	display: flex;
	flex-direction: column;
`;
export const CoverPicWrapper = styled.div`
	width: 100%;
	height: 70%;
	background: linear-gradient(
		0deg,
		white 0%,
		rgba(218, 222, 224, 1) 55%,
		rgba(161, 163, 164, 1) 76%,
		rgba(123, 126, 126, 1) 100%
	);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 0;
	.wrapper {
		max-width: 950px;
		width: 100%;
		height: 100%;
		position: relative;
		img {
			width: 100%;
			height: 100%;
		}
		button {
			width: 150px;
			height: 35px;
			padding: 0px 10px;
			position: absolute;
			bottom: 5%;
			right: 5%;
			border-radius: 5px;
			border: none;
			cursor: pointer;
			font-size: 0.85rem;
			font-weight: 600;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
	}
`;
export const ProfileInfoWrapper = styled.div`
	width: 100%;
	height: 30%;
	background-color: ${({ theme }) => theme.cardsBGC};
	display: flex;
	justify-content: center;
	z-index: 1;
	.wrapper {
		max-width: 900px;
		width: 100%;
		height: 100%;
		padding: 0 20px;
		position: relative;
		display: flex;
		flex-direction: row;
		align-items: flex-end;
	}
`;
export const ProfilePicWrapper = styled.div`
	width: 200px;
	height: 200px;
	position: relative;
	margin-right: 20px;
	border-radius: 50%;
	border: 2px solid white;
	background-color: ${({ theme }) => theme.cardsBGC};
	z-index: 1;
	img {
		opacity: ${({ visible }) => (visible ? "1" : "0")};
		width: 100%;
		height: 100%;
	}
	.edit-icon {
		position: absolute;
		opacity: ${({ visible }) => (visible ? "1" : "0")};
		bottom: 20px;
		right: 10px;
		padding: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: ${({ theme }) => theme.iconBGC};
		border-radius: 50%;
		:hover {
			opacity: 0.9;
		}
	}
`;
export const ProfileName = styled.div`
	height: 100%;
	width: 400px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	h1 {
		font-size: 2rem;
	}
`;
export const ProfilButtons = styled.div`
	height: 100%;
	width: auto;
	flex-grow: 1;
	position: relative;
	button {
		width: 120px;
		height: 30px;
		position: absolute;
		bottom: 30%;
		right: 5%;
		padding: 0px 10px;
		border-radius: 5px;
		border: none;
		cursor: pointer;
		font-size: 0.85rem;
		font-weight: 600;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
`;
export const LineWrapper = styled.div`
	width: 100%;
	background-color: ${({ theme }) => theme.cardsBGC};
	display: flex;
	justify-content: center;
	div {
		width: 100%;
		max-width: 850px;
		border-top: 0.1mm solid grey;
	}
`;
