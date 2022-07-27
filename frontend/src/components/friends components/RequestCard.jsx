import { CardContainer, CardButton } from "../../styles/friends";
import { errorNotification } from "../../helpers/notification";
import { useFriendRequestreplyMutation } from "../../features/auth/user-api-query";

export default function RequestCard({ user, currentuser, token, currentUserFetching }) {
	const [requestFriend, { isLoading }] = useFriendRequestreplyMutation();

	async function respondToFriendRequest(id, action) {
		try {
			await requestFriend({ author: currentuser._id, friend: id, action, token }).unwrap();
		} catch (error) {
			errorNotification(error.data.message, "req-card-error");
		}
	}

	return (
		<CardContainer>
			<img src={user?.profilePic.url} alt='Ball' className='m-b-10' />
			<h2 className='m-b-10'>{user?.name}</h2>
			{!isLoading && !currentUserFetching && (
				<>
					<CardButton
						className='m-b-10'
						fontColor={"#1877F2"}
						bgColor={"#E7F3FF"}
						onClick={() => respondToFriendRequest(user._id, "accept")}
					>
						Accept
					</CardButton>
					<CardButton
						className='m-b-10'
						fontColor={"#FF0000"}
						onClick={() => respondToFriendRequest(user._id, "deny")}
					>
						Deny
					</CardButton>
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
