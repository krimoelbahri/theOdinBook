import { ProfilePicWrapper, ProfileName, ProfilButtons } from "../../../styles/profile";
import { Skeleton } from "@mantine/core";
import { useState } from "react";
import { handlePPModal } from "../../../features/Modal/modalSlice";
import { useDispatch } from "react-redux";

function ProfileInfo({ currentUser, user }) {
	const dispatch = useDispatch();
	const [loaded, setloaded] = useState(false);

	return (
		<div className='wrapper'>
			<ProfilePicWrapper visible={loaded}>
				<Skeleton
					visible={!loaded}
					height={170}
					style={{ position: "absolute" }}
					circle
					mb='xl'
				/>
				<img onLoad={() => setloaded(true)} src={user?.profilePic.url} alt='' />
				{currentUser && (
					<div className='edit-icon c-p' onClick={() => dispatch(handlePPModal(true))}>
						<i className='fa-solid fa-camera'></i>
					</div>
				)}
			</ProfilePicWrapper>
			<ProfileName>
				<h1>{user?.name}</h1>
			</ProfileName>
			<ProfilButtons>
				{currentUser && (
					<button>
						<i className='fa-solid fa-pen'></i>Edit Profile
					</button>
				)}
			</ProfilButtons>
		</div>
	);
}

export default ProfileInfo;
