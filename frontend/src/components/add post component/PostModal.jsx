import { useState } from "react";
import { useDispatch } from "react-redux";
import { ModalContainer, Loader } from "../../styles/Modals";
import { handlePostModal } from "../../features/Modal/modalSlice";
import ModalbottomSection from "./Modal subcomponents/ModalbottomSection";
import ModalMediaSection from "./Modal subcomponents/ModalMediaSection";
import ModalTopSection from "./Modal subcomponents/ModalTopSection";
import { useAddPostMutation } from "../../features/posts/post-api-query";
import { errorNotification, successNotification } from "../../helpers/notification";
import { useAuth } from "../../App";

function PostModal() {
	//using Redux
	const dispatch = useDispatch();
	const { user, token } = useAuth();
	const [addPost] = useAddPostMutation();

	//useState state handeling post data
	const [media, setMedia] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [url, setUrl] = useState(null);
	const [_formData, setData] = useState({ description: null, author: user._id, imgFile: null });

	async function handleSubmit(e) {
		e.preventDefault();
		setIsLoading(true);
		try {
			await addPost({ ..._formData, token }).unwrap();
			successNotification("Post was succesfully added ", "adding-post");
			dispatch(handlePostModal(false));
		} catch (error) {
			errorNotification(error.data.message, "error-post");
		}
		setIsLoading(false);
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
			{isLoading && (
				<Loader>
					<i className='fa-solid fa-spinner fa-spin-pulse'></i>
				</Loader>
			)}
		</ModalContainer>
	);
}

export default PostModal;
