import { PostDescriptionContainer } from "../../../styles/Post.styled";

function PostDescription({ description }) {
	return (
		<PostDescriptionContainer>
			<p> {description}</p>
		</PostDescriptionContainer>
	);
}

export default PostDescription;
