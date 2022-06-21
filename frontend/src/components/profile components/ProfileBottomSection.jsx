import { BottomSectionContainer, ProfileLeftBar, ProfilePostsWrapper } from "../../styles/profile";
import { Post, CreatePost } from "../post components";
function ProfileBottomSection() {
	return (
		<BottomSectionContainer>
			<div className='wrapper'>
				<ProfileLeftBar></ProfileLeftBar>
				<ProfilePostsWrapper>
					<CreatePost />
					<Post />
				</ProfilePostsWrapper>
			</div>
		</BottomSectionContainer>
	);
}

export default ProfileBottomSection;
