import { TopSectionContainer, CoverPicWrapper, ProfileInfoWrapper } from "../../styles/profile";
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
		</TopSectionContainer>
	);
}

export default ProfileTopSection;
