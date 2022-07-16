import { CreatePostContainer } from "../../styles/home.styled";
import { useSelector, useDispatch } from "react-redux";
import { handlePostModal } from "../../features/Modal/modalSlice";
import { Link } from "react-router-dom";

function CreatePost() {
	const { user } = useSelector((state) => state.user);
	const dispatch = useDispatch();
	return (
		<CreatePostContainer>
			<div className='subdiv up b-b'>
				<Link to={`/${user._id}`}>
					<img className='c-p' src={user.profilePic.url} alt='Pr' />
				</Link>

				{user && (
					<p className='c-p' onClick={() => dispatch(handlePostModal(true))}>
						What's on your mind, <span className='bold'>{user.name}</span> ?
					</p>
				)}
			</div>
			<div className='subdiv down c-p' onClick={() => dispatch(handlePostModal(true))}>
				<i className='fa-solid fa-photo-film'></i>
				<p className='bold'>Photo/Video</p>
			</div>
		</CreatePostContainer>
	);
}

export default CreatePost;
