import { useLocation } from "react-router-dom";
import {
	ProfileTopSection,
	ProfileNavSection,
	ProfileBottomSection,
} from "../components/profile components";
import { useElementOnScreen } from "../hooks/intersectionObserver";

function Profile() {
	const [ref, isVisible] = useElementOnScreen({ rootMargin: "-60px" });
	const location = useLocation();
	return (
		<>
			<ProfileTopSection element={ref} />
			<ProfileNavSection visible={isVisible} location={location} />
			<ProfileBottomSection />
		</>
	);
}

export default Profile;
