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
