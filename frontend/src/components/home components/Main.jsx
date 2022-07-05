import { MainContainer } from "../../styles/home.styled";
import { Post, CreatePost } from "../post components";

function Main({ post }) {
	return (
		<MainContainer>
			<CreatePost />
			{post.posts?.map((post, i) => (
				<Post key={post._id} post={post} postIndex={i} />
			))}
		</MainContainer>
	);
}

export default Main;
