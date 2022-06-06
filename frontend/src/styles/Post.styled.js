import styled from "styled-components";
let boxShadow = "0px 0px 4px 1px rgba(209, 194, 194, 1)";

export const PostContainer = styled.div`
	width: 100%;
	border-radius: 10px;
	background-color: white;
	padding: 10px 20px;
	margin-bottom: 20px;
	box-shadow: ${boxShadow};
	-webkit-box-shadow: ${boxShadow};
	-moz-box-shadow: ${boxShadow};
`;
/*Post header*/
export const PostHeaderContainer = styled.div`
	width: 100%;
	margin-bottom: 5px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;
export const ProfileDiv = styled.div`
	width: 70%;
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
	.date {
		color: grey;
		width: fit-content;
	}
`;
/* Post description */
export const PostDescriptionContainer = styled.div`
	width: 100%;
	margin: 5px 0;
	p {
		padding: 5px;
	}
`;
/* Post description */
export const PostImgContainer = styled.div`
	width: calc(100% + 40px);
	margin: 5px 0 5px -20px;

	img {
		width: 100%;
	}
`;
/* Post description */
export const PostReactionContainer = styled.div`
	width: 100%;
	margin: 5px 0;
	display: flex;
	flex-direction: column;
	p {
		margin-left: 10px;
		font-size: 14px;
		color: gray;
	}
`;
export const ReactionsStatsDiv = styled.div`
	width: 100%;
	height: 40px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	div {
		display: flex;
		flex-direction: row;
	}
	p:hover {
		text-decoration: underline;
		cursor: pointer;
	}
`;
export const ReactionButtonsDiv = styled.div`
	width: 100%;
	height: 40px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	div {
		margin: 0 10px;
		padding: 10px;
		border-radius: 5px;
		display: flex;
		flex-direction: row;
	}
	div:hover {
		background-color: rgb(1 1 1 / 5%);
		cursor: pointer;
	}
	i {
		color: rgb(1 1 1 / 50%);
	}
	p {
		font-weight: bolder;
	}
`;
