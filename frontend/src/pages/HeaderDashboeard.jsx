import { Outlet } from "react-router-dom";
import Header from "../components/header components";

function HeaderDashboeard() {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
}

export default HeaderDashboeard;
