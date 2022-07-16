import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addingPost, addPosts, resetAddPost } from "../../features/posts/postSlice";
import { ModalContainer, Loader } from "../../styles/Modals";
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

	async function handleSubmit(e) {
		e.preventDefault();
		try {
			let post = await dispatch(addingPost(data)).unwrap();
			dispatch(addPosts(post));
			dispatch(handlePostModal(false));
			dispatch(resetAddPost());
		} catch (error) {
			console.log(error);
		}
	}

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
			{addPost.isLoading && (
				<Loader>
					<i className='fa-solid fa-spinner fa-spin-pulse'></i>
				</Loader>
			)}
		</ModalContainer>
	);
}

export default PostModal;
