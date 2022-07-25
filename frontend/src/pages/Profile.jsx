import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import {
	ProfileTopSection,
	ProfileNavSection,
	ProfileBottomSection,
} from "../components/profile components";
import { useElementOnScreen } from "../hooks/intersectionObserver";
import { useGetUserQuery } from "../features/auth/user-api-query";

function Profile() {
	const [ref, isVisible] = useElementOnScreen({ rootMargin: "-60px" });
	const { id } = useParams();
	const { user } = useSelector((state) => state.user);
	const { data = [], isFetching } = useGetUserQuery(id);
	const location = useLocation();

	return (
		<>
			<ProfileTopSection
				currentUser={id === user._id}
				element={ref}
				user={data}
				loading={isFetching}
			/>
			<ProfileNavSection visible={isVisible} location={location} user={data} />
			<ProfileBottomSection currentUser={id === user._id} id={id} user={data} />
		</>
	);
}

export default Profile;
