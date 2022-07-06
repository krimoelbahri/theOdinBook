import { NavSectionContainer, NavWraper, ProfileNavLink } from "../../styles/profile";
import { ProfileDiv } from "../../styles/Post.styled";

function ProfileNavSection({ visible, location, user }) {
	return (
		<NavSectionContainer>
			<NavWraper visible={visible} transform={"up"}>
				<ProfileNavLink
					to={`/${user?._id}?sf=posts`}
					state={{ data: "posts" }}
					isactive={
						location.state?.data === "posts" || location.state === null
							? "true"
							: undefined
					}
				>
					<div className='wrapper'>Posts</div>
				</ProfileNavLink>
				<ProfileNavLink
					to={`/${user?._id}?sf=about`}
					state={{ data: "about" }}
					isactive={location.state?.data === "about" ? "true" : undefined}
				>
					<div className='wrapper'>About</div>
				</ProfileNavLink>
				<ProfileNavLink
					to={`/${user?._id}?sf=friends`}
					state={{ data: "friends" }}
					isactive={location.state?.data === "friends" ? "true" : undefined}
				>
					<div className='wrapper'>Friends</div>
				</ProfileNavLink>
				<ProfileNavLink
					to={`/${user?._id}?sf=photos`}
					state={{ data: "photos" }}
					isactive={location.state?.data === "photos" ? "true" : undefined}
				>
					<div className='wrapper'>Photos</div>
				</ProfileNavLink>
				<ProfileNavLink
					to={`/${user?._id}?sf=videos`}
					state={{ data: "videos" }}
					isactive={location.state?.data === "videos" ? "true" : undefined}
				>
					<div className='wrapper'>Videos</div>
				</ProfileNavLink>
			</NavWraper>
			<NavWraper visible={!visible} transform={"down"}>
				<ProfileDiv>
					<img className='c-p' src={user?.profilePic} alt='' />
					<div>
						<p className='name c-p'>{user?.name}</p>
					</div>
				</ProfileDiv>
			</NavWraper>
		</NavSectionContainer>
	);
}

export default ProfileNavSection;
