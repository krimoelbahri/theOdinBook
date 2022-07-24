import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ModalContainer, Loader } from "../../styles/Modals";
import { handlePostModal } from "../../features/Modal/modalSlice";
import ModalbottomSection from "./Modal subcomponents/ModalbottomSection";
import ModalMediaSection from "./Modal subcomponents/ModalMediaSection";
import ModalTopSection from "./Modal subcomponents/ModalTopSection";
import { useAddPostMutation } from "../../features/posts/post-api-query";
import { showNotification } from "@mantine/notifications";

function PostModal() {
	//using Redux
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.user);
	const [addPost, addPostResult] = useAddPostMutation();

	//useState state handeling post data
	const [media, setMedia] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [url, setUrl] = useState(null);
	const [_formData, setData] = useState({ description: null, author: user._id, imgFile: null });

	async function handleSubmit(e) {
		e.preventDefault();
		let formData = new FormData();
		formData.append("imgFile", _formData.imgFile);
		formData.append("description", _formData.description);
		formData.append("author", _formData.author);
		setIsLoading(true);

		try {
			await addPost(formData).unwrap();
			showNotification({
				id: "adding-post",
				disallowClose: false,
				title: "Post added",
				message: "Post was succesfully added ",
				icon: <i className='fa-solid fa-check' />,
				radius: "md",
			});
			dispatch(handlePostModal(false));
		} catch (error) {
			showNotification({
				id: "error-post",
				disallowClose: false,
				title: "ERROR",
				message: error.data.message,
				color: "red",
				icon: <i className='fa-solid fa-xmark' />,
				radius: "md",
			});
		}
		setIsLoading(false);
	}

	useEffect(() => {
		//console.log(addPostResult);
	}, [addPostResult]);

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
