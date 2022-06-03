import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LeftBar, RightBar, Main } from "../components/home components";

const Home = () => {
	const { user } = useSelector((state) => state.user);
	const navigate = useNavigate();
	useEffect(() => {
		if (!user) navigate("/signin");
	}, [user, navigate]);

	return (
		<>
			<LeftBar />
			<Main />
			<RightBar />
		</>
	);
};

export default Home;
