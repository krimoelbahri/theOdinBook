import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/userSlice";
import { Container } from "../styles/header.styled";
import SearchBar from "./SearchBar";

function Header() {
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.user);
	return (
		<Container>
			<h4 className='logo'>ElbahriSocial</h4>
			<h4 className='logo-mobile'>BS</h4>
			{user && (
				<>
					<SearchBar />
					<div>
						<button
							onClick={() => {
								dispatch(logout());
							}}
						>
							Logout
						</button>
					</div>
				</>
			)}
		</Container>
	);
}

export default Header;
