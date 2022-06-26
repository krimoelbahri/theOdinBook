import { useRef } from "react";
import {
	ModalMediaSectionContainer,
	ModalTextarea,
	Textarea,
	TextareaPlaceHolder,
	ModalMediaarea,
} from "../../../styles/Add post";
import AddPhoto from "./AddPhoto";
function ModalMediaSection({ media, setMedia }) {
	const textArea = useRef();
	return (
		<ModalMediaSectionContainer>
			<ModalTextarea onClick={() => textArea.current.focus()}>
				<Textarea contentEditable={true} role={"textbox"} ref={textArea}></Textarea>
				<TextareaPlaceHolder>Whats on your mind {"elbahri"}</TextareaPlaceHolder>
			</ModalTextarea>
			<ModalMediaarea active={media}>
				<span className='item' onClick={() => setMedia(false)}>
					<i className='fa-solid fa-xmark'></i>
				</span>
				<AddPhoto />
			</ModalMediaarea>
		</ModalMediaSectionContainer>
	);
}

export default ModalMediaSection;
