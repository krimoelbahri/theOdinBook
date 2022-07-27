import { ProfilePicWrapper, ProfileName, ProfilButtons } from "../../../styles/profile";
import { useState, useEffect } from "react";
import { Skeleton } from "@mantine/core";
import { handlePPModal } from "../../../features/Modal/modalSlice";
import { useDispatch } from "react-redux";
import { useAuth } from "../../../App";
import {
	useFriendRequestMutation,
	useFriendRequestreplyMutation,
} from "../../../features/auth/user-api-query";
import { errorNotification } from "../../../helpers/notification";

export default function ProfileInfo({ profileUser, loading }) {
	const dispatch = useDispatch();
	const [loaded, setImgLoaded] = useState(false);
	const { user } = useAuth();

	return (
		<div className='wrapper'>
			<ProfilePicWrapper visible={!loading && loaded}>
				<Skeleton
					visible={loading || !loaded}
					height={170}
					style={{ position: "absolute" }}
					circle
					mb='xl'
				/>
				<img
					onLoad={() => setImgLoaded(true)}
					src={profileUser?.profilePic?.url}
					alt='user'
				/>
				{user?._id === profileUser?._id && (
					<div className='edit-icon c-p' onClick={() => dispatch(handlePPModal(true))}>
						<i className='fa-solid fa-camera'></i>
					</div>
				)}
			</ProfilePicWrapper>

			{loading ? (
				<Skeleton
					style={{
						alignSelf: "center",
					}}
					height={20}
					width={100}
					visible
				/>
			) : (
				<>
					<ProfileName>
						<h1>{profileUser?.name}</h1>
					</ProfileName>
					<Buttons user={user} profileUser={profileUser} />
				</>
			)}
		</div>
	);
}

function Buttons({ user, profileUser }) {
	const [friendState, setFriendState] = useState(null);
	const { token } = useAuth();
	const [requestFriend] = useFriendRequestMutation();
	const [replyRequestFriend] = useFriendRequestreplyMutation();

	async function handleRequests(id, action) {
		try {
			if (action === "request" || action === "cancel")
				await requestFriend({ author: user?._id, friend: id, action, token }).unwrap();
			if (action === "accept" || action === "remove" || action === "deny")
				await replyRequestFriend({ author: user?._id, friend: id, action, token }).unwrap();
		} catch (error) {
			errorNotification(error.data.message, "req-card-error");
		}
	}
	useEffect(() => {
		setFriendState(null);
		if (user?.friendRequests?.map((f) => f._id).includes(profileUser?._id)) {
			setFriendState("requested");
		}
		if (user?.friends?.map((f) => f._id).includes(profileUser?._id)) {
			setFriendState("friend");
		}
		if (profileUser?.friendRequests?.map((f) => f._id).includes(user?._id)) {
			setFriendState("req-sent");
		}
	}, [user, profileUser]);

	return (
		<ProfilButtons>
			{user?._id === profileUser?._id ? (
				<button>
					<i className='fa-solid fa-pen'></i>Edit Profile
				</button>
			) : friendState === "requested" ? (
				<>
					<button onClick={() => handleRequests(profileUser._id, "accept")}>
						<i className='fa-solid fa-user-check' />
						Accept req
					</button>
					<button onClick={() => handleRequests(profileUser._id, "deny")}>
						<i className='fa-solid fa-user-xmark' />
						Deny req
					</button>
				</>
			) : friendState === "friend" ? (
				<button onClick={() => handleRequests(profileUser._id, "remove")}>
					<i className='fa-solid fa-user-minus' />
					Unfriend
				</button>
			) : friendState === "req-sent" ? (
				<button onClick={() => handleRequests(profileUser._id, "cancel")}>
					<i className='fa-solid fa-user-xmark' />
					Cancel request
				</button>
			) : (
				<button onClick={() => handleRequests(profileUser._id, "request")}>
					<i className='fa-solid fa-user-plus' />
					Add friend
				</button>
			)}
		</ProfilButtons>
	);
}
