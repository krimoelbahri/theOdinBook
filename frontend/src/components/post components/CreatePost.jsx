import { CreatePostContainer } from "../../styles/home.styled";
import { useSelector, useDispatch } from "react-redux";
import { showPostModal } from "../../features/Modal/modalSlice";
function CreatePost() {
	const { user } = useSelector((state) => state.user);
	const dispatch = useDispatch();
	return (
		<CreatePostContainer>
			<div className='subdiv up b-b'>
				<img className='c-p' src={user.profilePic} alt='Pr' />
				{user && (
					<p className='c-p' onClick={() => dispatch(showPostModal())}>
						What's on your mind, {user.name}?
					</p>
				)}
			</div>
			<div className='subdiv down c-p' onClick={() => dispatch(showPostModal())}>
				<i className='fa-solid fa-photo-film'></i>
				<p>Photo/Video</p>
			</div>
		</CreatePostContainer>
	);
}

export default CreatePost;
