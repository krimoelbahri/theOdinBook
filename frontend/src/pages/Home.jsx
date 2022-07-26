import { useAuth } from "../App";
import { LeftBar, RightBar, Main } from "../components/home components";
import { Container } from "../styles/home.styled";
const Home = () => {
	const { user } = useAuth();

	return (
		<Container>
			<LeftBar />
			<Main />
			<RightBar friends={user?.friends} />
		</Container>
	);
};

export default Home;
