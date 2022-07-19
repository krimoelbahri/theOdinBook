import styled from "styled-components";
import { PostContainer } from "./Post.styled";

/*Variables*/
const SideBarContainer = styled.div`
	width: 300px;
	padding: 10px 20px;
	position: sticky;
	top: 80px;
	display: flex;
	flex-direction: column;
	justify-content: start;
`;

/* Home Container*/
export const Container = styled.div`
	width: 100%;
	position: relative;
	top: 60px;
	padding-top: 20px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: flex-start;
	@media (max-width: 1100px) {
		justify-content: space-around;
	}
	@media (max-width: 800px) {
		justify-content: center;
	}
`;
/* Main styling */
export const MainContainer = styled.div`
	width: 450px;
	min-height: 100%;
`;
/* LeftBar styling */
export const LBContainer = styled(SideBarContainer)`
	left: 10px;
	@media (max-width: 1100px) {
		display: none;
	}

	a {
		height: 30px;
		margin-bottom: 10px;
		display: flex;
		flex-direction: row;
		justify-content: start;
		align-items: center;
		border-radius: 5px 0 0 5px;
		color: inherit;
		text-decoration: none;
	}
	a:hover {
		background-color: ${({ theme }) => theme.hoverBGC};
		cursor: pointer;
	}
	i {
		margin-right: 10px;
		margin-left: 10px;
	}
`;

/* RightBar styling */
export const RBContainer = styled(SideBarContainer)`
	right: 10px;
	background-color: ${({ theme }) => theme.cardsBGC};
	border-radius: 20px 20px 0 0;
	box-shadow: ${({ theme }) => theme.mainBS};
	-webkit-box-shadow: ${({ theme }) => theme.mainBS};
	-moz-box-shadow: ${({ theme }) => theme.mainBS};
	@media (max-width: 800px) {
		display: none;
	}

	.subDiv {
		height: 30px;
		margin-bottom: 5px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	i {
		margin-right: 10px;
	}
`;
export const ProfilesContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`;
export const ProfileWrapper = styled.div`
	width: 100%;
	padding: 10px 0px;
	display: flex;
	flex-direction: row;
	align-items: center;
	img {
		width: 25px;
		height: 25px;
		border-radius: 50%;
		margin-right: 15px;
	}
	p {
		font-size: 0.85rem;
		font-weight: bold;
	}
`;

/*Create Post*/
export const CreatePostContainer = styled(PostContainer)`
	.subdiv {
		display: flex;
		flex-direction: row;
		align-items: center;
		.bold {
			font-weight: 500;
		}
		img {
			height: 40px;
			width: 40px;
			margin-right: 20px;
			border-radius: 50%;
		}
		i {
			margin-right: 10px;
			font-size: 22px;
			color: green;
		}
		p {
			font-size: 14px;
			color: ${({ theme }) => theme.placeHolderColor};
		}
	}
	.up {
		padding: 5px 10px 10px 10px;
		p {
			width: calc(100% - 50px);
			height: 40px;
			line-height: 20px;
			padding: 10px 20px;
			border-radius: 20px;
			background-color: ${({ theme }) => theme.commentsBGC};
		}
	}
	.down {
		height: 40px;
		width: fit-content;
		border-radius: 5px;
		padding: 5px 10px;
		margin-top: 10px;
	}
	.down:hover {
		background-color: ${({ theme }) => theme.hoverBGC};
	}
`;
