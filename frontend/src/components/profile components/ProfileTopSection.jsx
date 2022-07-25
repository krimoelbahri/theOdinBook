import {
	TopSectionContainer,
	CoverPicWrapper,
	ProfileInfoWrapper,
	LineWrapper,
} from "../../styles/profile";
import CoverPic from "./subcomponents/CoverPic";
import ProfileInfo from "./subcomponents/ProfileInfo";
import { useScrollIntoView } from "@mantine/hooks";
import { useEffect } from "react";

function ProfileTopSection({ currentUser, element, user, loading }) {
	const { scrollIntoView, targetRef } = useScrollIntoView();
	useEffect(() => {
		scrollIntoView({ alignment: "center" });
	}, [scrollIntoView]);

	return (
		<TopSectionContainer ref={element}>
			<CoverPicWrapper>
				<CoverPic currentUser={currentUser} user={user} loading={loading} />
			</CoverPicWrapper>
			<ProfileInfoWrapper ref={targetRef}>
				<ProfileInfo currentUser={currentUser} user={user} loading={loading} />
			</ProfileInfoWrapper>
			<LineWrapper>
				<div></div>
			</LineWrapper>
		</TopSectionContainer>
	);
}

export default ProfileTopSection;
