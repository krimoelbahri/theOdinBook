import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/auth/userSlice";
import { Container } from "../../styles/Header";
import { SearchInput, Logo, Shortcuts, Setting } from "./subcomponents";

function Header() {
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.user);
	return (
		<Container>
			<Logo />
			{user && (
				<>
					<SearchInput />
					<Shortcuts />
					<Setting />
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
