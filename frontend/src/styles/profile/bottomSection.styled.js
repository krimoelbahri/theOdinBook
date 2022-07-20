import styled from "styled-components";

export const BottomSectionContainer = styled.div`
	width: 100%;
	padding-top: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	.wrapper {
		width: 100%;
		max-width: 850px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		@media (max-width: 850px) {
			justify-content: center;
		}
	}
`;
export const ProfileLeftBar = styled.div`
	width: 37%;
	position: sticky;
	display: flex;
	flex-direction: column;
	@media (max-width: 850px) {
		display: none;
	}
`;
export const FriendsContainer = styled.div`
	width: 100%;
	padding: 10px;
	background-color: ${({ theme }) => theme.cardsBGC};
	border-radius: 10px;

	.header {
		width: 100%;
		height: 40px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin: 10px 0;
		h3 {
			font-size: large;
			font-weight: bold;
			:hover {
				text-decoration: underline solid black 20%;
				cursor: pointer;
			}
		}
		h4 {
			font-size: medium;
			color: blue;
			padding: 10px;
			text-align: center;
			border-radius: 5px;
			:hover {
				background-color: ${({ theme }) => theme.hoverBGC};
				cursor: pointer;
			}
		}
	}
	.wrapper {
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-evenly;
		.card {
			margin-bottom: 20px;
			width: 80px;
			text-align: center;
			img {
				width: 80px;
				height: 80px;
				border-radius: 10px;
				margin-bottom: 5px;
			}
			h3 {
				font-weight: bold;
				font-size: 12px;
			}
		}
	}
`;
export const ProfilePostsWrapper = styled.div`
	width: 500px;
	display: flex;
	flex-direction: column;
	@media (max-width: 600px) {
		width: 100%;
	}
`;
