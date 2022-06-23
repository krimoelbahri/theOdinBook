import {
	ModalMediaSectionContainer,
	ModalTextarea,
	ModalMediaarea,
} from "../../../styles/Add post";

function ModalMediaSection() {
	return (
		<ModalMediaSectionContainer>
			<ModalTextarea minHeight={"31px"}>
				<div contentEditable={true}></div>
			</ModalTextarea>
			<ModalMediaarea></ModalMediaarea>
		</ModalMediaSectionContainer>
	);
}

export default ModalMediaSection;
