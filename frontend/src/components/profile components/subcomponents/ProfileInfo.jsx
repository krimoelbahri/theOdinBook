import { ProfilePicWrapper, ProfileName, ProfilButtons } from "../../../styles/profile";
import { Skeleton } from "@mantine/core";
import { useState } from "react";
function ProfileInfo({ user }) {
	const [loaded, setloaded] = useState(false);
	return (
		<div className='wrapper'>
			<ProfilePicWrapper visible={loaded}>
				<Skeleton
					visible={!loaded}
					height={190}
					style={{ position: "absolute", left: "5px", top: "5px" }}
					circle
					mb='xl'
				/>
				<img onLoad={() => setloaded(true)} src={user?.profilePic} alt='' />
				<div className='edit-icon c-p'>
					<i className='fa-solid fa-camera'></i>
				</div>
			</ProfilePicWrapper>
			<ProfileName>
				<h1>{user?.name}</h1>
			</ProfileName>
			<ProfilButtons>
				<button>
					<i className='fa-solid fa-pen'></i>Edit Profile
				</button>
			</ProfilButtons>
		</div>
	);
}

export default ProfileInfo;
