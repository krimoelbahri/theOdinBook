import { PostImgContainer } from "../../../styles/Post.styled";

function PostImg({ url }) {
	return (
		<PostImgContainer>
			<img src={url} alt='Post' />
		</PostImgContainer>
	);
}

export default PostImg;
