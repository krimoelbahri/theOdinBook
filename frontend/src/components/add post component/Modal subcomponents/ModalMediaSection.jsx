import { useRef, useState } from "react";
import {
	ModalMediaSectionContainer,
	ModalTextarea,
	Textarea,
	TextareaPlaceHolder,
	ModalMediaarea,
} from "../../../styles/Add post";
import AddPhoto from "./AddPhoto";
function ModalMediaSection({ media, setMedia, url, setUrl, setData }) {
	const textArea = useRef();
	const [placeHolder, setPlaceHolder] = useState(true);
	function handleChange(e) {
		if (e.target.textContent === "") {
			setPlaceHolder(true);
			setData((state) => ({ ...state, description: null }));
		}
		if (e.target.textContent !== "") {
			setPlaceHolder(false);
			setData((state) => ({ ...state, description: e.target.textContent }));
		}
	}
	return (
		<ModalMediaSectionContainer>
			<ModalTextarea onClick={() => textArea.current.focus()}>
				<Textarea
					onInput={handleChange}
					contentEditable={true}
					role={"textbox"}
					ref={textArea}
				></Textarea>
				{placeHolder && (
					<TextareaPlaceHolder>Whats on your mind {"elbahri"}</TextareaPlaceHolder>
				)}
			</ModalTextarea>
			<ModalMediaarea active={media}>
				<span
					className='item'
					onClick={() => {
						setUrl(null);
						setMedia(false);
					}}
				>
					<i className='fa-solid fa-xmark'></i>
				</span>
				<AddPhoto url={url} setUrl={setUrl} setData={setData} />
			</ModalMediaarea>
		</ModalMediaSectionContainer>
	);
}

export default ModalMediaSection;
