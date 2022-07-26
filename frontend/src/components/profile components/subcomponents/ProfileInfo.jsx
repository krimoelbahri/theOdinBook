import { ProfilePicWrapper, ProfileName, ProfilButtons } from "../../../styles/profile";
import { Skeleton } from "@mantine/core";
import { handlePPModal } from "../../../features/Modal/modalSlice";
import { useDispatch } from "react-redux";

function ProfileInfo({ currentUser, user, loading }) {
	const dispatch = useDispatch();

	return (
		<div className='wrapper'>
			<ProfilePicWrapper visible={!loading}>
				<Skeleton
					visible={loading}
					height={170}
					style={{ position: "absolute" }}
					circle
					mb='xl'
				/>
				<img src={user?.profilePic?.url} alt='user' />
				{currentUser && (
					<div className='edit-icon c-p' onClick={() => dispatch(handlePPModal(true))}>
						<i className='fa-solid fa-camera'></i>
					</div>
				)}
			</ProfilePicWrapper>
			<ProfileName>
				{loading ? <Skeleton height={20} width={100} visible /> : <h1>{user?.name}</h1>}
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
