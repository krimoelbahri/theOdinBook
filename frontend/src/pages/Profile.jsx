import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import {
	ProfileTopSection,
	ProfileNavSection,
	ProfileBottomSection,
} from "../components/profile components";
import { getUser, reset } from "../features/auth/userSlice";
import { useElementOnScreen } from "../hooks/intersectionObserver";
import { useGetProfilePostsQuery } from "../features/posts/post-api-query";

function Profile() {
	const [ref, isVisible] = useElementOnScreen({ rootMargin: "-60px" });
	const { id } = useParams();

	const dispatch = useDispatch();
	const { user, profileUser } = useSelector((state) => state.user);
	const { data } = useGetProfilePostsQuery(id);

	const location = useLocation();

	useEffect(() => {
		dispatch(getUser(id));

		return () => dispatch(reset());
	}, [id, user, dispatch]);

	return (
		<>
			<ProfileTopSection currentUser={id === user._id} element={ref} user={profileUser} />
			<ProfileNavSection visible={isVisible} location={location} user={profileUser} />
			<ProfileBottomSection currentUser={id === user._id} post={data} user={profileUser} />
		</>
	);
}

export default Profile;
