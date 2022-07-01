import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import isRTL from "../../../helpers/isRTL";
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
	const [rtl, setRtl] = useState("");
	const { user } = useSelector((state) => state.user);
	function handleChange(e) {
		if (e.target.innerText === "") {
			setRtl("");
			setPlaceHolder(true);
			setData((state) => ({ ...state, description: null }));
		}
		if (e.target.innerText !== "") {
			if (isRTL(e.target.textContent)) setRtl("rtl");
			setPlaceHolder(false);
			setData((state) => ({ ...state, description: e.target.innerText }));
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
					dir={rtl}
				></Textarea>
				{placeHolder && (
					<TextareaPlaceHolder>Whats on your mind, {user.name} ?</TextareaPlaceHolder>
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
