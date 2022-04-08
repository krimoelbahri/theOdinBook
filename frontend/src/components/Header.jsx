import { useDispatch } from "react-redux";
import { logout } from "../features/auth/userSlice";

function Header() {
	const dispatch = useDispatch();
	return (
		<div>
			<button
				onClick={() => {
					dispatch(logout());
				}}
			>
				Logout
			</button>
		</div>
	);
}

export default Header;
