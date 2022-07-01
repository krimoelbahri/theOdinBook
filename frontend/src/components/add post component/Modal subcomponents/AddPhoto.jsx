import { useRef } from "react";
import { AddPhotoContainer, AddPhotoInput } from "../../../styles/Add post";

function AddPhoto({ url, setUrl, setData }) {
	const fileInput = useRef();

	function handleFileInput() {
		fileInput.current.click();
	}

	function handleImage() {
		let selectedImage = fileInput.current.files[0];
		let url = URL.createObjectURL(selectedImage);
		setUrl(url);
		setData((state) => ({ ...state, imgFile: selectedImage }));
	}

	return (
		<AddPhotoContainer>
			{!url && (
				<AddPhotoInput onClick={handleFileInput}>
					<i className='fa-solid fa-file-medical'></i>
					<h1>Add Photos</h1>
				</AddPhotoInput>
			)}
			{url && <img src={url} alt={"holder"} />}
			<input
				onChange={handleImage}
				type={"file"}
				style={{ display: "none" }}
				ref={fileInput}
			/>
		</AddPhotoContainer>
	);
}

export default AddPhoto;
