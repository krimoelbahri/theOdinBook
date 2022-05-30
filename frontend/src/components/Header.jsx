import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/userSlice";
import { Container } from "../styles/header.styled";

function Header() {
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.user);
	return (
		<Container>
			{user && (
				<button
					onClick={() => {
						dispatch(logout());
					}}
				>
					Logout
				</button>
			)}
		</Container>
	);
}

export default Header;
