import {
	ModalBottomSectionContainer,
	AddMediaToPost,
	ModalSubmitButton,
} from "../../../styles/Modals";

function ModalbottomSection({ setMedia, setUrl }) {
	return (
		<ModalBottomSectionContainer>
			<AddMediaToPost>
				<h3>Add to your post</h3>
				<i
					className='fa-solid fa-photo-film'
					onClick={() => {
						setUrl(null);
						setMedia((state) => !state);
					}}
				></i>
			</AddMediaToPost>
			<ModalSubmitButton type='submit'>
				<h3>Post</h3>
			</ModalSubmitButton>
		</ModalBottomSectionContainer>
	);
}

export default ModalbottomSection;
