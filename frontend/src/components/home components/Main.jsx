import { MainContainer } from "../../styles/home.styled";
import { Post, CreatePost } from "../post components";

function Main() {
	return (
		<MainContainer>
			<CreatePost />
			<Post />
			<Post />
			<Post />
		</MainContainer>
	);
}

export default Main;
