import { useAuth } from "../../App";
import { Container } from "../../styles/Header";
import { SearchInput, Logo, Shortcuts, Setting } from "./subcomponents";

function Header() {
	const { user } = useAuth();
	return (
		<Container>
			<Logo />
			{user && (
				<>
					<SearchInput />
					<Shortcuts />
					<Setting />
				</>
			)}
		</Container>
	);
}

export default Header;
