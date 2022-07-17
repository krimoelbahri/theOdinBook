import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	ModalContainer,
	ModalBottomSectionContainer,
	ModalMediaSectionContainer,
	ModalMediaarea,
	ModalSubmitButton,
	ModalHeader,
	Loader,
} from "../../styles/Modals";
import { handlePPModal } from "../../features/Modal/modalSlice";
import AddPhoto from "../add post component/Modal subcomponents/AddPhoto";
import { updateImage, updateUser } from "../../features/auth/userSlice";

function ProfilePicModal() {
	//using Redux
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.user);
	//useState state handeling post data
	const [url, setUrl] = useState(null);
	const [data, setData] = useState({ action: "profile", author: user._id, imgFile: null });
	const [loading, setLoading] = useState(false);
	async function handleSubmit(e) {
		e.preventDefault();
		try {
			setLoading(true);
			let user = await dispatch(updateImage(data)).unwrap();
			dispatch(updateUser(user));
			setLoading(false);
			dispatch(handlePPModal(false));
		} catch (error) {
			setLoading(false);
			console.log(error);
		}
	}

	return (
		<ModalContainer onSubmit={handleSubmit}>
			<div className='top-section'>
				<ModalHeader className='b-b'>
					<h2>Update Profile Picture</h2>
					<span className='item' onClick={() => dispatch(handlePPModal(false))}>
						<i className='fa-solid fa-xmark'></i>
					</span>
				</ModalHeader>
			</div>
			<ModalMediaSectionContainer>
				<ModalMediaarea active={true}>
					<AddPhoto url={url} setUrl={setUrl} setData={setData} />
				</ModalMediaarea>
			</ModalMediaSectionContainer>
			<ModalBottomSectionContainer>
				<ModalSubmitButton type='submit'>
					<h3>Update Picture</h3>
				</ModalSubmitButton>
			</ModalBottomSectionContainer>
			{loading && (
				<Loader>
					<i className='fa-solid fa-spinner fa-spin-pulse'></i>
				</Loader>
			)}
		</ModalContainer>
	);
}

export default ProfilePicModal;
