import { useSelector } from "react-redux";
import { LeftBar, RightBar, Main } from "../components/home components";
import { Container } from "../styles/home.styled";
import { useGetUserPostsQuery } from "../features/posts/post-api-query";
const Home = () => {
	const { user } = useSelector((state) => state.user);
	const { data = [] } = useGetUserPostsQuery();

	return (
		<Container>
			<LeftBar />
			<Main post={data} />
			<RightBar friends={user?.friends} />
		</Container>
	);
};

export default Home;
