import { ShortcutsContainer, ShortcutDiv } from "../../../styles/Header";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Shortcuts() {
	let location = useLocation();
	return (
		<ShortcutsContainer>
			<ShortcutDiv active={location.pathname === "/" ? true : false}>
				<NavLink to={"/"} className='item-holder'>
					<i className='fa-solid fa-house'></i>
				</NavLink>
			</ShortcutDiv>
			<ShortcutDiv active={location.pathname === "/friends" ? true : false}>
				<NavLink to={"/friends"} className='item-holder'>
					<i className='fa-solid fa-user-group' />
				</NavLink>
			</ShortcutDiv>
			<ShortcutDiv active={location.pathname === "/watch" ? true : false}>
				<NavLink to={"/"} className='item-holder'>
					<i className='fa-solid fa-tv'></i>
				</NavLink>
			</ShortcutDiv>
		</ShortcutsContainer>
	);
}

export default Shortcuts;
