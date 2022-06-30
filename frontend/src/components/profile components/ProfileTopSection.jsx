import {
	TopSectionContainer,
	CoverPicWrapper,
	ProfileInfoWrapper,
	LineWrapper,
} from "../../styles/profile";
import CoverPic from "./subcomponents/CoverPic";
import ProfileInfo from "./subcomponents/ProfileInfo";

function ProfileTopSection({ element, user }) {
	return (
		<TopSectionContainer ref={element}>
			<CoverPicWrapper>
				<CoverPic user={user} />
			</CoverPicWrapper>
			<ProfileInfoWrapper>
				<ProfileInfo user={user} />
			</ProfileInfoWrapper>
			<LineWrapper>
				<div></div>
			</LineWrapper>
		</TopSectionContainer>
	);
}

export default ProfileTopSection;
