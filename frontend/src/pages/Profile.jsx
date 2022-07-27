import { useLocation, useParams } from "react-router-dom";
import {
	ProfileTopSection,
	ProfileNavSection,
	ProfileBottomSection,
} from "../components/profile components";
import { useElementOnScreen } from "../hooks/intersectionObserver";
import { useGetUserQuery } from "../features/auth/user-api-query";
import { useAuth } from "../App";
import Spinner from "../components/Spinner";
import { NoUserFound } from "./NotFound";

function Profile() {
	const [ref, isVisible] = useElementOnScreen({ rootMargin: "-60px" });
	const { id } = useParams();
	const { user } = useAuth();
	const { currentData = [], isLoading, isFetching, isError } = useGetUserQuery(id);
	const location = useLocation();

	if (isError) return <NoUserFound />;
	if (isLoading) return <Spinner />;
	return (
		<>
			<ProfileTopSection loading={isFetching} element={ref} user={currentData} />
			<ProfileNavSection visible={isVisible} location={location} user={currentData} />
			<ProfileBottomSection
				loading={isFetching}
				currentUser={id === user._id}
				id={id}
				user={currentData}
			/>
		</>
	);
}

export default Profile;
