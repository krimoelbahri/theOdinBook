import { NavSectionContainer, NavWraper, NavLink } from "../../styles/profile";
import { ProfileDiv } from "../../styles/Post.styled";

function ProfileNavSection({ visible }) {
	return (
		<NavSectionContainer>
			<NavWraper visible={visible} pos={"relative"}>
				<NavLink to={"/"}>
					<div className='wrapper'>Posts</div>
				</NavLink>
				<NavLink to={"/"}>
					<div className='wrapper'>About</div>
				</NavLink>
				<NavLink to={"/"}>
					<div className='wrapper'>Friends</div>
				</NavLink>
				<NavLink to={"/"}>
					<div className='wrapper'>Photos</div>
				</NavLink>
				<NavLink to={"/"}>
					<div className='wrapper'>Videos</div>
				</NavLink>
			</NavWraper>
			<NavWraper visible={!visible} pos={"absolute"}>
				<ProfileDiv>
					<img className='c-p' src='' alt='' />
					<div>
						<p className='name c-p'>Profile name</p>
					</div>
				</ProfileDiv>
			</NavWraper>
		</NavSectionContainer>
	);
}

export default ProfileNavSection;
