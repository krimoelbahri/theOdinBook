import styled from "styled-components";
import { PostContainer } from "./Post.styled";

/*Variables*/
let boxShadow = "0px 0px 4px 1px rgba(209, 194, 194, 1)";
const SideBarContainer = styled.div`
	width: 270px;
	padding: 10px 20px;
	position: fixed;
	display: flex;
	flex-direction: column;
	justify-content: start;
`;

/* Home Container*/
export const Container = styled.div`
	width: 100%;
	position: relative;
	top: 60px;
	height: calc(100% - 60px);
	padding-top: 20px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	@media (max-width: 1000px) {
		justify-content: start;
	}
	@media (max-width: 800px) {
		justify-content: center;
	}
`;
/* Main styling */
export const MainContainer = styled.div`
	width: 450px;
	min-height: 100%;
	margin-right: 20px;
	@media (max-width: 1000px) {
		margin-left: 60px;
	}
	@media (max-width: 800px) {
		margin-left: 0px;
	}
`;
/* LeftBar styling */
export const LBContainer = styled(SideBarContainer)`
	left: 10px;
	@media (max-width: 1000px) {
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
		background-color: #d9d1d3;
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
	background-color: white;
	border-radius: 20px 20px 0 0;
	box-shadow: ${boxShadow};
	-webkit-box-shadow: ${boxShadow};
	-moz-box-shadow: ${boxShadow};
	@media (max-width: 800px) {
		display: none;
	}

	.subDiv {
		display: flex;
		height: 30px;
		margin-bottom: 5px;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.types {
		div {
			height: 100%;
			padding: 5px;
			//border-bottom: 1px solid black;
		}
		div:hover {
			background-color: #d9d1d3;
			border-bottom: 1px solid black;
			border-radius: 5px 5px 0 0;
			cursor: pointer;
		}
	}
	li {
		display: flex;
		flex-direction: row;
		justify-content: start;
		align-items: center;
	}
	i {
		margin-right: 10px;
	}
`;
/*Create Post*/
export const CreatePostContainer = styled(PostContainer)`
	.subdiv {
		display: flex;
		flex-direction: row;
		align-items: center;
		img {
			height: 40px;
			width: 40px;
			margin-right: 20px;
			border-radius: 50%;
			border: 1px solid;
		}
		i {
			margin-right: 10px;
			font-size: 22px;
			color: green;
		}
		p {
			font-size: 14px;
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
			background-color: #efefef;
		}
	}
	.down {
		height: 50px;
		width: fit-content;
		border-radius: 5px 5px 0 0;
		padding: 5px 10px;
	}
	.down:hover {
		background-color: #d9d1d3;
	}
`;
