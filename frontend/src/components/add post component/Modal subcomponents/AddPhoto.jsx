import { useRef } from "react";
import { validateImgWidth } from "../../../helpers/validateImg";
import { AddPhotoContainer, AddPhotoInput } from "../../../styles/Modals";
import { errorNotification } from "../../../helpers/notification";

function AddPhoto({ action, url, setUrl, setData }) {
	const fileInput = useRef();

	function handleFileInput() {
		if (!url) {
			fileInput.current.click();
			fileInput.current.value = null;
		}
	}

	async function handleImage() {
		let selectedImage = fileInput.current.files[0];
		if (
			selectedImage.type.split("/")[1] !== "png" &&
			selectedImage.type.split("/")[1] !== "webp" &&
			selectedImage.type.split("/")[1] !== "jpeg" &&
			selectedImage.type.split("/")[1] !== "jpg"
		) {
			//handle error if non-Image file was selected
			errorNotification("This file is not supported", "Non-img");
			return;
		}
		if (selectedImage.size > 1000000) {
			//handle error if file is too big
			errorNotification(`file is too big, Should be less then 1MB`, "file-big");
			return;
		}
		if (action === "cover") {
			let test = await validateImgWidth(selectedImage);
			if (!test) {
				//handle cover image width & height errors
				errorNotification(
					"The image WIDTH/HEIGHT ratio should be between 2-3",
					"img-ratio",
				);
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
				onInput={handleImage}
				type={"file"}
				style={{ display: "none" }}
				ref={fileInput}
			/>
		</AddPhotoContainer>
	);
}

export default AddPhoto;
