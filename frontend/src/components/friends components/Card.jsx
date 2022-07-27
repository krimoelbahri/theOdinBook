import { CardContainer, CardButton } from "../../styles/friends";
import { useState, useEffect } from "react";
import { errorNotification } from "../../helpers/notification";
import { useFriendRequestMutation } from "../../features/auth/user-api-query";

export default function Card({ user, currentuser, token }) {
	const [requested, setRequested] = useState(false);
	const [requestFriend, { isLoading }] = useFriendRequestMutation();
	function handleRemoveCard() {}

	async function handleFriendRequest(id, action) {
		try {
			await requestFriend({ author: currentuser._id, friend: id, action, token }).unwrap();
		} catch (error) {
			errorNotification(error.data.message, "card-error");
		}
	}

	useEffect(() => {
		if (user.friendRequests?.every((friend) => friend._id !== currentuser._id)) {
			setRequested(false);
		} else {
			setRequested(true);
		}
	}, [currentuser, user]);

	return (
		<CardContainer>
			<img src={user?.profilePic.url} alt='Ball' className='m-b-10' />
			<h2 className='m-b-10'>{user?.name}</h2>
			{!isLoading && (
				<>
					{!requested && (
						<>
							<CardButton
								onClick={() => {
									handleFriendRequest(user._id, "request");
									setRequested(true);
								}}
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
					{requested && (
						<CardButton
							className='m-b-10'
							onClick={() => {
								handleFriendRequest(user._id, "cancel");
								setRequested(false);
							}}
						>
							Cancel
						</CardButton>
					)}
				</>
			)}

			{isLoading && (
				<CardButton>
					<i className='fa-solid fa-spinner fa-spin-pulse'></i>
				</CardButton>
			)}
		</CardContainer>
	);
}
