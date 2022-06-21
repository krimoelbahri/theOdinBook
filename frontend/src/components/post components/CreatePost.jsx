import { CreatePostContainer } from "../../styles/home.styled";
import { useSelector } from "react-redux";

function CreatePost() {
	const { user } = useSelector((state) => state.user);

	return (
		<CreatePostContainer>
			<div className='subdiv up b-b'>
				<img className='c-p' src={user.profilePic} alt='Pr' />
				{user && <p className='c-p'>What's on your mind, {user.name}?</p>}
			</div>
			<div className='subdiv down c-p'>
				<i className='fa-solid fa-photo-film'></i>
				<p>Photo/Video</p>
			</div>
		</CreatePostContainer>
	);
}

export default CreatePost;
