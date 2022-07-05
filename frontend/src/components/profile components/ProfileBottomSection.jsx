import { Link } from "react-router-dom";
import {
	BottomSectionContainer,
	ProfileLeftBar,
	ProfilePostsWrapper,
	FriendsContainer,
} from "../../styles/profile";
import { Post, CreatePost } from "../post components";

function ProfileBottomSection({ currentUser, post, user }) {
	return (
		<BottomSectionContainer>
			<div className='wrapper'>
				<ProfileLeftBar>
					<FriendsContainer>
						<div className='header'>
							<Link to={`/${user._id}?sf=friends`} state={{ data: "friends" }}>
								<h3>Friends</h3>
							</Link>
							<Link to={`/${user._id}?sf=friends`} state={{ data: "friends" }}>
								<h4>See all friends</h4>
							</Link>
						</div>
						<div className='wrapper'>
							{Array.from(Array(9)).map((_, i) => (
								<div key={`card${i}`} className='card'>
									<img
										src='https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
										alt='card'
									/>
									<h3>Profile Name</h3>
								</div>
							))}
						</div>
					</FriendsContainer>
				</ProfileLeftBar>
				<ProfilePostsWrapper>
					{currentUser && <CreatePost />}
					{post?.posts?.map((post) => (
						<Post key={post._id} post={post} />
					))}
				</ProfilePostsWrapper>
			</div>
		</BottomSectionContainer>
	);
}

export default ProfileBottomSection;
