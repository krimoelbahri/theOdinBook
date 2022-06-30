import { Link } from "react-router-dom";
import { PostHeaderContainer, ProfileDiv } from "../../../styles/Post.styled";

function PostHeader({ user, date }) {
	return (
		<PostHeaderContainer>
			<ProfileDiv>
				<Link to={`/${user._id}`}>
					<img className='c-p' src={user?.profilePic} alt='' />
				</Link>
				<div>
					<Link to={`/${user._id}`}>
						<p className='name c-p'>{user?.name}</p>
					</Link>
					<p className='date c-p'>{date}</p>
				</div>
			</ProfileDiv>
			<div>
				<i className='fa-solid fa-ellipsis'></i>
			</div>
		</PostHeaderContainer>
	);
}

export default PostHeader;
