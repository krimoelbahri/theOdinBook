import { PostHeaderContainer, ProfileDiv } from "../../../styles/Post.styled";

function PostHeader() {
	return (
		<PostHeaderContainer>
			<ProfileDiv>
				<img className='c-p' src='' alt='' />
				<div>
					<p className='name c-p'>Profile name</p>
					<p className='date c-p'>date</p>
				</div>
			</ProfileDiv>
			<div>
				<i className='fa-solid fa-ellipsis'></i>
			</div>
		</PostHeaderContainer>
	);
}

export default PostHeader;
