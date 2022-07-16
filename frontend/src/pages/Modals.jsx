import { Container } from "../styles/Modals";
import PostModal from "../components/add post component";
import { useSelector } from "react-redux";
import { CoverPicModal, ProfilePicModal } from "../components/profile components";

function Modals() {
	const { postModal, coverPicModal, profilePicModal } = useSelector((state) => state.modal);
	const { user } = useSelector((state) => state.user);

	return (
		<>
			{postModal && <Container>{user && <PostModal />}</Container>}
			{coverPicModal && <Container>{user && <CoverPicModal />}</Container>}
			{profilePicModal && <Container>{user && <ProfilePicModal />}</Container>}
		</>
	);
}

export default Modals;
