import { useState } from "react";
import { useDispatch } from "react-redux";
import {
	ModalContainer,
	ModalBottomSectionContainer,
	ModalMediaSectionContainer,
	ModalMediaarea,
	ModalSubmitButton,
	ModalHeader,
	Loader,
} from "../../styles/Modals";
import { handleCPModal } from "../../features/Modal/modalSlice";
import AddPhoto from "../add post component/Modal subcomponents/AddPhoto";
import { useUpdateUserMutation } from "../../features/auth/user-api-query";
import { useAuth } from "../../App";
import { errorNotification } from "../../helpers/notification";

function CoverPicModal() {
	//using Redux
	const [updateUser, updateUserResult] = useUpdateUserMutation();
	const dispatch = useDispatch();
	const { user, token } = useAuth();

	//useState state handeling post data
	const [url, setUrl] = useState(null);
	const [data, setData] = useState({ action: "cover", id: user._id, imgFile: null });

	async function handleSubmit(e) {
		e.preventDefault();
		try {
			await updateUser({ ...data, token }).unwrap();
			dispatch(handleCPModal(false));
		} catch (error) {
			errorNotification(error.data.message, "coverPic-update");
		}
	}

	return (
		<ModalContainer onSubmit={handleSubmit}>
			<div className='top-section'>
				<ModalHeader className='b-b'>
					<h2>Update Cover Picture</h2>
					<span className='item' onClick={() => dispatch(handleCPModal(false))}>
						<i className='fa-solid fa-xmark'></i>
					</span>
				</ModalHeader>
			</div>
			<ModalMediaSectionContainer>
				<ModalMediaarea active={true}>
					{url && (
						<span
							className='item'
							onClick={() => {
								setUrl(null);
							}}
						>
							<i className='fa-solid fa-xmark'></i>
						</span>
					)}
					<AddPhoto action={"cover"} url={url} setUrl={setUrl} setData={setData} />
				</ModalMediaarea>
			</ModalMediaSectionContainer>
			<ModalBottomSectionContainer>
				<ModalSubmitButton type='submit'>
					<h3>Update Picture</h3>
				</ModalSubmitButton>
			</ModalBottomSectionContainer>
			{updateUserResult.isLoading && (
				<Loader>
					<i className='fa-solid fa-spinner fa-spin-pulse'></i>
				</Loader>
			)}
		</ModalContainer>
	);
}

export default CoverPicModal;
