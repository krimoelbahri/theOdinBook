import {
	TopSectionContainer,
	CoverPicWrapper,
	ProfileInfoWrapper,
	LineWrapper,
} from "../../styles/profile";
import CoverPic from "./subcomponents/CoverPic";
import ProfileInfo from "./subcomponents/ProfileInfo";

function ProfileTopSection({ currentUser, element, user }) {
	return (
		<TopSectionContainer ref={element}>
			<CoverPicWrapper>
				<CoverPic currentUser={currentUser} user={user} />
			</CoverPicWrapper>
			<ProfileInfoWrapper>
				<ProfileInfo currentUser={currentUser} user={user} />
			</ProfileInfoWrapper>
			<LineWrapper>
				<div></div>
			</LineWrapper>
		</TopSectionContainer>
	);
}

export default ProfileTopSection;
