import {
	TopSectionContainer,
	CoverPicWrapper,
	ProfileInfoWrapper,
	LineWrapper,
} from "../../styles/profile";
import CoverPic from "./subcomponents/CoverPic";
import ProfileInfo from "./subcomponents/ProfileInfo";

function ProfileTopSection({ element }) {
	return (
		<TopSectionContainer ref={element}>
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
