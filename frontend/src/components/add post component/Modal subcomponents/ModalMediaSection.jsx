import { useRef } from "react";
import {
	ModalMediaSectionContainer,
	ModalTextarea,
	Textarea,
	TextareaPlaceHolder,
	ModalMediaarea,
} from "../../../styles/Add post";

function ModalMediaSection({ media }) {
	const textArea = useRef();
	return (
		<ModalMediaSectionContainer>
			<ModalTextarea onClick={() => textArea.current.focus()}>
				<Textarea contentEditable={true} role={"textbox"} ref={textArea}></Textarea>
				<TextareaPlaceHolder>Whats on your mind {"elbahri"}</TextareaPlaceHolder>
			</ModalTextarea>
			<ModalMediaarea active={media}></ModalMediaarea>
		</ModalMediaSectionContainer>
	);
}

export default ModalMediaSection;
