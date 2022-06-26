import { AddPhotoContainer, AddPhotoInput } from "../../../styles/Add post";

function AddPhoto() {
	return (
		<AddPhotoContainer>
			<AddPhotoInput>
				<i className='fa-solid fa-file-medical'></i>
				<h1>Add Photos</h1>
			</AddPhotoInput>
		</AddPhotoContainer>
	);
}

export default AddPhoto;
