import { useSelector } from "react-redux";
import { ProfilePicWrapper, ProfileName, ProfilButtons } from "../../../styles/profile";

function ProfileInfo() {
	const { user } = useSelector((state) => state.user);

	return (
		<div className='wrapper'>
			<ProfilePicWrapper>
				<img src={user.profilePic} alt='' />
			</ProfilePicWrapper>
			<ProfileName>
				<h1>{user.name}</h1>
			</ProfileName>
			<ProfilButtons>
				<button>Edit Profile</button>
			</ProfilButtons>
		</div>
	);
}

export default ProfileInfo;
