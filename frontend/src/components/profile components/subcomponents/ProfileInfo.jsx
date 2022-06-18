import { useSelector } from "react-redux";
import { ProfilePicWrapper } from "../../../styles/profile";

function ProfileInfo() {
	const { user } = useSelector((state) => state.user);

	return (
		<div className='wrapper'>
			<ProfilePicWrapper>
				<img src={user.profilePic} alt='' />
			</ProfilePicWrapper>
		</div>
	);
}

export default ProfileInfo;
