import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import {
	ProfileTopSection,
	ProfileNavSection,
	ProfileBottomSection,
} from "../components/profile components";
import { getUser, reset } from "../features/auth/userSlice";
import { resetPost, getPosts } from "../features/posts/postSlice";
import { useElementOnScreen } from "../hooks/intersectionObserver";

function Profile() {
	const [ref, isVisible] = useElementOnScreen({ rootMargin: "-60px" });
	const { user, profileUser } = useSelector((state) => state.user);
	const { post } = useSelector((state) => state.post);

	const dispatch = useDispatch();
	const { id } = useParams();
	const location = useLocation();

	useEffect(() => {
		if (id !== user._id) {
			dispatch(getUser(id));
		}
		return () => dispatch(reset());
	}, [id, user, dispatch]);

	useEffect(() => {
		dispatch(getPosts(id));
		return () => dispatch(resetPost());
	}, [id, user, dispatch]);
	return (
		<>
			<ProfileTopSection element={ref} user={profileUser || user} />
			<ProfileNavSection visible={isVisible} location={location} user={profileUser || user} />
			<ProfileBottomSection
				currentUser={id === user._id}
				post={post}
				user={profileUser || user}
			/>
		</>
	);
}

export default Profile;
