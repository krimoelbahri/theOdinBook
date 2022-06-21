import styled from "styled-components";

export const BottomSectionContainer = styled.div`
	width: 100%;
	padding-top: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	.wrapper {
		width: 100%;
		max-width: 850px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
`;
export const ProfileLeftBar = styled.div`
	width: 30%;
	position: sticky;
	display: flex;
	flex-direction: column;
`;
export const ProfilePostsWrapper = styled.div`
	width: 60%;
	display: flex;
	flex-direction: column;
`;
