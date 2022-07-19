import { useRef } from "react";
import { validateImgWidth } from "../../../helpers/validateImg";
import { AddPhotoContainer, AddPhotoInput } from "../../../styles/Modals";

function AddPhoto({ action, url, setUrl, setData }) {
	const fileInput = useRef();

	function handleFileInput() {
		if (!url) fileInput.current.click();
	}

	async function handleImage() {
		let selectedImage = fileInput.current.files[0];
		if (
			selectedImage.type.split("/")[1] !== "png" &&
			selectedImage.type.split("/")[1] !== "webp" &&
			selectedImage.type.split("/")[1] !== "jpeg" &&
			selectedImage.type.split("/")[1] !== "jpg"
		) {
			//TODO: handle error if non-Image file was selected
			return;
		}
		if (selectedImage.size > 1000000) {
			console.log("file too big");
			return;
		}
		if (action === "cover") {
			let test = await validateImgWidth(selectedImage);
			if (!test) {
				//TODO: handle cover image width & height errors
				return;
			}
		}
		let url = URL.createObjectURL(selectedImage);
		setUrl(url);
		setData((state) => ({ ...state, imgFile: selectedImage }));
	}

	return (
		<AddPhotoContainer onClick={handleFileInput}>
			{!url && (
				<AddPhotoInput>
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
