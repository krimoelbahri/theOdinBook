import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LeftBar, RightBar, Main } from "../components/home components";
import { getPosts, resetPost } from "../features/posts/postSlice";
import { Container } from "../styles/home.styled";

const Home = () => {
	const dispatch = useDispatch();
	const { post } = useSelector((state) => state.post);
	const { user } = useSelector((state) => state.user);

	useEffect(() => {
		dispatch(getPosts());
		return () => dispatch(resetPost());
	}, [dispatch]);

	return (
		<Container>
			<LeftBar />
			<Main post={post} />
			<RightBar friends={user?.friends} />
		</Container>
	);
};

export default Home;
