import { ModalHeader, ModalProfileDiv } from "../../../styles/Add post";

function ModalTopSection() {
	return (
		<div className='top-section'>
			<ModalHeader className='b-b'>
				<h2>Create Post</h2>
				<span className='item'>
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
