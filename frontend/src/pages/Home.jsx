import { useSelector } from "react-redux";
import { LeftBar, RightBar, Main } from "../components/home components";
import { Container } from "../styles/home.styled";
const Home = () => {
	const { user } = useSelector((state) => state.user);

	return (
		<Container>
			<LeftBar />
			<Main />
			<RightBar friends={user?.friends} />
		</Container>
	);
};

export default Home;
