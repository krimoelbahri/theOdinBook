import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addingPost, getPost } from "../../features/posts/postSlice";
import { ModalContainer } from "../../styles/Add post";
import { handlePostModal } from "../../features/Modal/modalSlice";
import ModalbottomSection from "./Modal subcomponents/ModalbottomSection";
import ModalMediaSection from "./Modal subcomponents/ModalMediaSection";
import ModalTopSection from "./Modal subcomponents/ModalTopSection";

function PostModal() {
	//using Redux
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.user);
	const { addPost } = useSelector((state) => state.post);
	//useState state handeling post data
	const [media, setMedia] = useState(false);
	const [url, setUrl] = useState(null);
	const [data, setData] = useState({ description: null, author: user._id, imgFile: null });

	function handleSubmit(e) {
		e.preventDefault();
		dispatch(addingPost(data));
	}

	useEffect(() => {
		if (addPost.isDone) {
			dispatch(getPost(addPost.post._id));
			dispatch(handlePostModal(false));
		}
	}, [addPost, dispatch]);

	return (
		<ModalContainer onSubmit={handleSubmit}>
			<ModalTopSection setData={setData} />
			<ModalMediaSection
				media={media}
				setMedia={setMedia}
				url={url}
				setUrl={setUrl}
				setData={setData}
			/>
			<ModalbottomSection setMedia={setMedia} setUrl={setUrl} />
		</ModalContainer>
	);
}

export default PostModal;
