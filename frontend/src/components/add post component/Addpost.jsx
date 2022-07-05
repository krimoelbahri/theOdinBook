import { Container } from "../../styles/Add post";
import PostModal from "./PostModal";
import { useSelector } from "react-redux";

function Addpost() {
	const { postModal } = useSelector((state) => state.modal);
	const { user } = useSelector((state) => state.user);

	return <>{postModal && <Container>{user && <PostModal />}</Container>}</>;
}

export default Addpost;
