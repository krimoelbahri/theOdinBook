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
							<Link to={`/${user?._id}?sf=friends`} state={{ data: "friends" }}>
								<h3>Friends</h3>
							</Link>
							<Link to={`/${user?._id}?sf=friends`} state={{ data: "friends" }}>
								<h4>See all friends</h4>
							</Link>
						</div>
						<div className='wrapper'>
							{user?.friends?.map((friend, i) => (
								<Link
									to={`/${friend._id}`}
									key={`card${friend._id}`}
									className='card'
								>
									<img src={friend.profilePic.url} alt='card' />
									<h3>{friend.name}</h3>
								</Link>
							))}
						</div>
					</FriendsContainer>
				</ProfileLeftBar>
				<ProfilePostsWrapper>
					{currentUser && <CreatePost />}
					{post?.map((post, i) => (
						<Post key={post._id} post={post} postIndex={i} />
					))}
				</ProfilePostsWrapper>
			</div>
		</BottomSectionContainer>
	);
}

export default ProfileBottomSection;
