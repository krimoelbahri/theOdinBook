import { CardContainer, CardButton } from "../../styles/friends";
import { friendRequestreply, updateUser } from "../../features/auth/userSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function RequestCard({ user, currentuser }) {
	const dispatch = useDispatch();

	const [loading, setLoading] = useState(false);

	async function respondToFriendRequest(id, action) {
		try {
			setLoading(true);
			let updatedUser = await dispatch(
				friendRequestreply({ author: currentuser._id, friend: id, action }),
			).unwrap();
			dispatch(updateUser(updatedUser));
			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	}

	return (
		<CardContainer>
			<img src={user?.profilePic.url} alt='Ball' className='m-b-10' />
			<h2 className='m-b-10'>{user?.name}</h2>
			{!loading && (
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
			{loading && (
				<CardButton>
					<i className='fa-solid fa-spinner fa-spin-pulse'></i>
				</CardButton>
			)}
		</CardContainer>
	);
}
