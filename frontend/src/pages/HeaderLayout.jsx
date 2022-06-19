import { Outlet } from "react-router-dom";
import Header from "../components/header components";

function HeaderLayout() {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
}

export default HeaderLayout;
