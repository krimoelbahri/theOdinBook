import { ShortcutsContainer } from "../../../styles/Header";

function Shortcuts() {
	return (
		<ShortcutsContainer>
			<div>
				<span className='item-holder'>
					<i className='fa-solid fa-house'></i>
				</span>
			</div>
			<div>
				<span className='item-holder'>
					<i className='fa-solid fa-user-group' />
				</span>
			</div>
			<div>
				<span className='item-holder'>
					<i className='fa-solid fa-tv'></i>
				</span>
			</div>
		</ShortcutsContainer>
	);
}

export default Shortcuts;
