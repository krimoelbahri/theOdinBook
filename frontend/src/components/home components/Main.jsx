import { useSelector } from "react-redux";
import { MainContainer, CreatePostContainer } from "../../styles/home.styled";

function Main() {
	const { user } = useSelector((state) => state.user);

	return (
		<MainContainer>
			<CreatePostContainer>
				<div className='subdiv up b-b'>
					<img className='c-p' src='' alt='Pr' />
					<p className='c-p'>What's on your mind, {user.name}?</p>
				</div>
				<div className='subdiv down c-p'>
					<i className='fa-solid fa-photo-film'></i>
					<p>Photo/Video</p>
				</div>
			</CreatePostContainer>
		</MainContainer>
	);
}

export default Main;
