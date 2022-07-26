import { CardContainer, CardButton } from "../../styles/friends";
import { friendRequest } from "../../features/auth/userSlice";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { errorNotification } from "../../helpers/notification";

export default function Card({ user, currentuser, setUsers }) {
	const dispatch = useDispatch();

	const [cardUser, setCardUser] = useState(user);
	const [requested, setRequested] = useState(false);
	const [loading, setLoading] = useState(true);

	function handleRemoveCard() {
		setUsers((state) => state.filter((cardUser) => cardUser._id !== user._id));
	}

	async function handleFriendRequest(id, action) {
		try {
			setLoading(true);
			let updatedUser = await dispatch(
				friendRequest({ author: currentuser._id, friend: id, action }),
			).unwrap();
			setCardUser(updatedUser);
			setLoading(false);
		} catch (error) {
			errorNotification(error.data.message, "card-error");
			setLoading(false);
		}
	}

	useEffect(() => {
		if (cardUser.friendRequests?.every((friend) => friend._id !== currentuser._id)) {
			setRequested(false);
		} else {
			setRequested(true);
		}
		setLoading(false);
	}, [currentuser, cardUser]);

	return (
		<CardContainer>
			<img src={cardUser?.profilePic.url} alt='Ball' className='m-b-10' />
			<h2 className='m-b-10'>{cardUser?.name}</h2>
			{!requested && !loading && (
				<>
					<CardButton
						onClick={() => handleFriendRequest(cardUser._id, "request")}
						className='m-b-10'
						fontColor={"#1877F2"}
						bgColor={"#E7F3FF"}
					>
						Add friend
					</CardButton>
					<CardButton className='m-b-10' onClick={handleRemoveCard}>
						Remove
					</CardButton>
				</>
			)}
			{requested && !loading && (
				<CardButton
					className='m-b-10'
					onClick={() => handleFriendRequest(cardUser._id, "cancel")}
				>
					Cancel
				</CardButton>
			)}
			{loading && (
				<CardButton>
					<i className='fa-solid fa-spinner fa-spin-pulse'></i>
				</CardButton>
			)}
		</CardContainer>
	);
}
