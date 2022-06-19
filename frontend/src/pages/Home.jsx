import { LeftBar, RightBar, Main } from "../components/home components";
import { Container } from "../styles/home.styled";

const Home = () => {
	return (
		<Container>
			<LeftBar />
			<Main />
			<RightBar />
		</Container>
	);
};

export default Home;
