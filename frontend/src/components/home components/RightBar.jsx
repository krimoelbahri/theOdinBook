import React from "react";
import { RBContainer, ProfilesContainer, ProfileWrapper } from "../../styles/home.styled";

function RightBar({ friends }) {
	return (
		<RBContainer>
			<div className='subDiv contacts b-b'>
				<h5>Contacts</h5>
				<i className='fa-solid fa-address-book'></i>
			</div>

			<ProfilesContainer>
				{friends.map((friend) => (
					<ProfileWrapper key={`friend${friend._id}`}>
						<img src={friend.profilePic.url} alt='friend' />
						<p>{friend.name}</p>
					</ProfileWrapper>
				))}
			</ProfilesContainer>
		</RBContainer>
	);
}

export default RightBar;
