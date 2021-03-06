import { ModalHeader, ModalProfileDiv } from "../../../styles/Modals";
import { handlePostModal } from "../../../features/Modal/modalSlice";
import { useDispatch } from "react-redux";
import { useAuth } from "../../../App";

function ModalTopSection() {
	const dispatch = useDispatch();
	const { user } = useAuth();

	return (
		<div className='top-section'>
			<ModalHeader className='b-b'>
				<h2>Create Post</h2>
				<span className='item' onClick={() => dispatch(handlePostModal(false))}>
					<i className='fa-solid fa-xmark'></i>
				</span>
			</ModalHeader>
			<ModalProfileDiv>
				<img className='c-p' src={user.profilePic.url} alt='Profile' />
				<div>
					<p className='name c-p'>{user.name}</p>
				</div>
			</ModalProfileDiv>
		</div>
	);
}

export default ModalTopSection;
