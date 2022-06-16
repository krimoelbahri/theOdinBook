import React from "react";
import { Link } from "react-router-dom";
import { LBContainer } from "../../styles/home.styled";

function LeftBar() {
	return (
		<LBContainer>
			<ul>
				<li>
					<Link to={"/"}>
						<i className='fa-solid fa-newspaper'></i>
						<p>Latest News</p>
					</Link>
				</li>
				<li>
					<Link to={"/friends"}>
						<i className='fa-solid fa-user-group' />
						<p>Friends</p>
					</Link>
				</li>
				<li>
					<Link to={"/friends"}>
						{/*TODO:change this to groups*/}
						<i className='fa-solid fa-users-line'></i>
						<p>Groups</p>
					</Link>
				</li>
				<li>
					<Link to={"/watch"}>
						<i className='fa-solid fa-tv'></i>
						<p>Watch</p>
					</Link>
				</li>
			</ul>
		</LBContainer>
	);
}

export default LeftBar;
