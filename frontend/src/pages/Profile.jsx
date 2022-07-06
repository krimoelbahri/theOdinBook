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
		dispatch(getUser(id));

		return () => dispatch(reset());
	}, [id, user, dispatch]);

	useEffect(() => {
		dispatch(getPosts(id));
		return () => dispatch(resetPost());
	}, [id, user, dispatch]);
	return (
		<>
			<ProfileTopSection element={ref} user={profileUser} />
			<ProfileNavSection visible={isVisible} location={location} user={profileUser} />
			<ProfileBottomSection currentUser={id === user._id} post={post} user={profileUser} />
		</>
	);
}

export default Profile;
