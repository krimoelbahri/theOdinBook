import { ModalHeader, ModalProfileDiv } from "../../../styles/Add post";
import { handlePostModal } from "../../../features/Modal/modalSlice";
import { useDispatch } from "react-redux";

function ModalTopSection() {
	const dispatch = useDispatch();

	return (
		<div className='top-section'>
			<ModalHeader className='b-b'>
				<h2>Create Post</h2>
				<span className='item' onClick={() => dispatch(handlePostModal(false))}>
					<i className='fa-solid fa-xmark'></i>
				</span>
			</ModalHeader>
			<ModalProfileDiv>
				<img className='c-p' src='' alt='' />
				<div>
					<p className='name c-p'>Profile name</p>
				</div>
			</ModalProfileDiv>
		</div>
	);
}

export default ModalTopSection;
