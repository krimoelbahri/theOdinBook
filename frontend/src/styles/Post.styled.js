import styled from "styled-components";

export const PostContainer = styled.div`
	width: 100%;
	border-radius: 10px;
	background-color: ${({ theme }) => theme.cardsBGC};
	padding: 10px 20px;
	margin-bottom: 20px;
	box-shadow: ${({ theme }) => theme.mainBS};
	-webkit-box-shadow: ${({ theme }) => theme.mainBS};
	-moz-box-shadow: ${({ theme }) => theme.mainBS};
`;
/* Post header */
export const PostHeaderContainer = styled.div`
	width: 100%;
	margin-bottom: 5px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	div.icon {
		width: 30px;
		height: 30px;
		padding: 7px;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		:hover {
			background-color: ${({ theme }) => theme.hoverBGC};
		}
	}
`;
export const PostHeaderDD = styled.div`
	width: 200px;
	min-height: 30px;
	padding: 7px;
	border-radius: 5px;
	box-shadow: ${({ theme }) => theme.mainBS};
	background-color: ${({ theme }) => theme.cardsBGC};
	position: absolute;
	right: 0;
	top: 35px;
	display: ${({ active }) => (active ? "flex" : "none")};
	flex-direction: column;
	div {
		width: 100%;
		padding: 5px;
		border-radius: 5px;
		display: flex;
		flex-direction: row;
		align-items: center;
		:hover {
			background-color: ${({ theme }) => theme.hoverBGC};
		}
		i {
			margin-right: 10px;
		}
	}
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
		:hover {
			opacity: 0.9;
		}
	}
	p {
		font-size: 14px;
	}
	.name {
		font-weight: bold;
		:hover {
			text-decoration: underline;
		}
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
/* Post images */
export const PostImgContainer = styled.div`
	width: calc(100% + 40px);
	margin: 5px 0 5px -20px;

	img {
		width: 100%;
	}
`;
/* Post Reactions */
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
		background-color: ${({ theme }) => theme.hoverBGC};
		cursor: pointer;
	}
	i.like-icon {
		color: ${({ isLiked, theme }) => (isLiked ? theme.headerBGC : "rgb(1 1 1 / 50%)")};
	}
	p.like-icon {
		color: ${({ isLiked, theme }) => (isLiked ? theme.headerBGC : "rgb(1 1 1 / 50%)")};
		font-weight: bolder;
	}
	i {
		color: rgb(1 1 1 / 50%);
	}
	p {
		font-weight: bolder;
	}
`;
/* Post comments */
export const PostCommentsContainer = styled.div`
	width: 100%;
	border-top: 1px solid #c9c4c4;
	display: flex;
	flex-direction: column;
`;
export const ShowCommentsDiv = styled.div`
	margin-top: 10px;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
`;
export const AddCommentsDiv = styled.div`
	margin-top: 10px;
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	img {
		height: 30px;
		width: 30px;
		border-radius: 50%;
		border: 1px solid;
		margin-right: 10px;
	}
	div {
		width: 100%;
		border-radius: 20px;
		background-color: ${({ theme }) => theme.commentsBGC};
		form {
			display: flex;
			width: 100%;
			padding: 5px 10px;
			textarea {
				flex: auto;
				height: 20px;
				max-height: 150px;
				resize: none;
				outline: none;
				border: none;
				background-color: transparent;
			}
			button {
				border: none;
				background-color: transparent;
			}
		}
	}
`;
export const CommentsDiv = styled.div`
	width: 100%;
	margin-top: 10px;
	display: flex;
	flex-direction: column;
	div {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		img {
			height: 30px;
			width: 30px;
			border-radius: 50%;
			border: 1px solid;
			margin-right: 10px;
		}
		div {
			max-width: 100%;
			margin-right: 10px;
			padding: 5px;
			border-radius: 10px;
			background-color: ${({ theme }) => theme.commentsBGC};
			div {
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				p {
					//profile name
					font-size: 14px;
					line-height: 16px;
					margin-bottom: 10px;
					:hover {
						text-decoration: underline;
					}
				}
				span {
					//comment body
					font-size: 14px;
				}
			}
		}
		i {
			align-self: center;
			padding: 7px;
			border-radius: 50%;
			:hover {
				background-color: ${({ theme }) => theme.commentsBGC};
			}
		}
	}
`;
