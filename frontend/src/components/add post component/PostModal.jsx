import { ModalContainer } from "../../styles/Add post";
import ModalMediaSection from "./Modal subcomponents/ModalMediaSection";
import ModalTopSection from "./Modal subcomponents/ModalTopSection";

function PostModal() {
	return (
		<ModalContainer>
			<ModalTopSection />
			<ModalMediaSection />
		</ModalContainer>
	);
}

export default PostModal;
