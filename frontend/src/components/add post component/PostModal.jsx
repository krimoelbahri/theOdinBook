import { useState } from "react";
import { ModalContainer } from "../../styles/Add post";
import ModalbottomSection from "./Modal subcomponents/ModalbottomSection";
import ModalMediaSection from "./Modal subcomponents/ModalMediaSection";
import ModalTopSection from "./Modal subcomponents/ModalTopSection";

function PostModal() {
	const [media, setMedia] = useState(false);
	return (
		<ModalContainer>
			<ModalTopSection />
			<ModalMediaSection media={media} />
			<ModalbottomSection setMedia={setMedia} />
		</ModalContainer>
	);
}

export default PostModal;
