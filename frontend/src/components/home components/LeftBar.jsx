import React from "react";
import { LBContainer } from "../../styles/home.styled";

function LeftBar() {
	return (
		<LBContainer>
			<ul>
				<li>
					<i className='fa-solid fa-newspaper'></i>
					<p>Latest News</p>
				</li>
				<li>
					<i className='fa-solid fa-user-group' />
					<p>Friends</p>
				</li>
				<li>
					<i className='fa-solid fa-users-line'></i>
					<p>Groups</p>
				</li>
				<li>
					<i className='fa-solid fa-tv'></i>
					<p>Watch</p>
				</li>
			</ul>
		</LBContainer>
	);
}

export default LeftBar;
