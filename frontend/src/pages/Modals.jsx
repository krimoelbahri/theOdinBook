import { Container } from "../styles/Modals";
import PostModal from "../components/add post component";
import { useSelector } from "react-redux";
import { CoverPicModal, ProfilePicModal } from "../components/profile components";
import { useScrollLock } from "@mantine/hooks";
import { useEffect } from "react";

function Modals() {
	const { postModal, coverPicModal, profilePicModal } = useSelector((state) => state.modal);
	const { user } = useSelector((state) => state.user);
	// eslint-disable-next-line no-unused-vars
	const [scrollLocked, setScrollLocked] = useScrollLock();

	useEffect(() => {
		if (postModal || coverPicModal || profilePicModal) {
			setScrollLocked(true);
		} else {
			setScrollLocked(false);
		}
	}, [postModal, coverPicModal, profilePicModal, setScrollLocked]);

	return (
		<>
			{postModal && <Container>{user && <PostModal />}</Container>}
			{coverPicModal && <Container>{user && <CoverPicModal />}</Container>}
			{profilePicModal && <Container>{user && <ProfilePicModal />}</Container>}
		</>
	);
}

export default Modals;
