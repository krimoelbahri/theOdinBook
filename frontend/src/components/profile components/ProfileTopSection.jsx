import {
	TopSectionContainer,
	CoverPicWrapper,
	ProfileInfoWrapper,
	LineWrapper,
} from "../../styles/profile";
import CoverPic from "./subcomponents/CoverPic";
import ProfileInfo from "./subcomponents/ProfileInfo";

function ProfileTopSection() {
	return (
		<TopSectionContainer>
			<CoverPicWrapper>
				<CoverPic />
			</CoverPicWrapper>
			<ProfileInfoWrapper>
				<ProfileInfo />
			</ProfileInfoWrapper>
			<LineWrapper>
				<div></div>
			</LineWrapper>
		</TopSectionContainer>
	);
}

export default ProfileTopSection;
