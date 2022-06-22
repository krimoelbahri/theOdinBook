import { CardContainer, CardButton } from "../../styles/friends";

export default function Card() {
	return (
		<CardContainer>
			<img
				src='https://images.unsplash.com/photo-1614632537190-23e4146777db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
				alt='Ball'
				className='m-b-10'
			/>
			<h2 className='m-b-10'>Profile Name</h2>
			<CardButton className='m-b-10' fontColor={"#1877F2"} bgColor={"#E7F3FF"}>
				Add friend
			</CardButton>
			<CardButton className='m-b-10'>Remove</CardButton>
		</CardContainer>
	);
}
