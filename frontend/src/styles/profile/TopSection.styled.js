import styled from "styled-components";

export const TopSectionContainer = styled.div`
	width: 100%;
	height: calc(100vh - 135px);
	position: relative;
	top: 60px;
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
			height: 30px;
			position: absolute;
			bottom: 5%;
			right: 5%;
		}
	}
`;
export const ProfileInfoWrapper = styled.div`
	width: 100%;
	height: 30%;
	background-color: white;
	display: flex;
	justify-content: center;
	.wrapper {
		max-width: 950px;
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
	border-radius: 50%;
	z-index: 1;
	img {
		width: 100%;
		height: 100%;
	}
`;
