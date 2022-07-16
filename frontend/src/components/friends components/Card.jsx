import { CardContainer, CardButton } from "../../styles/friends";

export default function Card({ user, setFriends, setUsers }) {
	function handleAddfriends() {}
	function handleRemoveCard() {
		setUsers((state) => state.filter((cardUser) => cardUser._id !== user._id));
	}

	return (
		<CardContainer>
			<img src={user?.profilePic.url} alt='Ball' className='m-b-10' />
			<h2 className='m-b-10'>{user?.name}</h2>
			<CardButton
				onClick={handleAddfriends}
				className='m-b-10'
				fontColor={"#1877F2"}
				bgColor={"#E7F3FF"}
			>
				Add friend
			</CardButton>
			<CardButton className='m-b-10' onClick={handleRemoveCard}>
				Remove
			</CardButton>
		</CardContainer>
	);
}
