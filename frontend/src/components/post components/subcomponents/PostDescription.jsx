import { useEffect, useState, useRef } from "react";
import isRTL from "../../../helpers/isRTL";
import { PostDescriptionContainer } from "../../../styles/Post.styled";

function PostDescription({ description }) {
	const [rtl, setRtl] = useState("");
	const paragraph = useRef();

	useEffect(() => {
		if (isRTL(description)) setRtl("rtl");
		paragraph.current.innerText = description;
	}, [description]);

	return (
		<PostDescriptionContainer dir={rtl}>
			<p ref={paragraph}> </p>
		</PostDescriptionContainer>
	);
}

export default PostDescription;
