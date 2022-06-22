import { useSelector } from "react-redux";
import { Container } from "../../styles/Header";
import { SearchInput, Logo, Shortcuts, Setting } from "./subcomponents";
import HideDD from "../HideDD";

function Header() {
	const { user } = useSelector((state) => state.user);
	return (
		<Container>
			<Logo />
			{user && (
				<>
					<SearchInput />
					<Shortcuts />
					<Setting />
					<HideDD />
				</>
			)}
		</Container>
	);
}

export default Header;
