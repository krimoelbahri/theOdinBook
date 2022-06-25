import { Container } from "../../styles/Add post";
import PostModal from "./PostModal";
import { useSelector } from "react-redux";

function Addpost() {
	const { postModal } = useSelector((state) => state.modal);
	return (
		<Container active={postModal}>
			<PostModal />
		</Container>
	);
}

export default Addpost;
