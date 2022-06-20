import {
	ProfileTopSection,
	ProfileNavSection,
	ProfileBottomSection,
} from "../components/profile components";
import { useElementOnScreen } from "../hooks/intersectionObserver";

function Profile() {
	const [ref, isVisible] = useElementOnScreen({ rootMargin: "-60px" });

	return (
		<>
			<ProfileTopSection element={ref} />
			<ProfileNavSection visible={isVisible} />
			<ProfileBottomSection />
		</>
	);
}

export default Profile;
