import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../features/auth/userSlice";
import { handleSettingDD, handleSettingDDContent } from "../../../features/dropDown/dropDownSlice";
import {
	ProfileDiv,
	SettingsDiv,
	IconContainer,
} from "../../../styles/Header/SettingsAccount-styled";

function MainDD() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { user } = useSelector((state) => state.user);

	return (
		<>
			<ProfileDiv
				onClick={() => {
					dispatch(handleSettingDD(false));
					navigate(`/${user._id}`);
				}}
			>
				<img className='c-p' src={user.profilePic} alt='profile' />
				<div>
					<h1>Profile name</h1>
					<p>see your profile</p>
				</div>
			</ProfileDiv>
			<hr />
			<SettingsDiv>
				<div
					className='hv fr-sb'
					onClick={() => dispatch(handleSettingDDContent("setting"))}
				>
					<div className='fr-sb'>
						<IconContainer>
							<i className='fa-solid fa-gear'></i>
						</IconContainer>
						<p>Settings</p>
					</div>
					<i className='fa-solid fa-chevron-right'></i>
				</div>
				<div
					className='hv fr-sb'
					onClick={() => dispatch(handleSettingDDContent("display"))}
				>
					<div className='fr-sb'>
						<IconContainer>
							<i className='fa-solid fa-moon'></i>
						</IconContainer>
						<p>Display</p>
					</div>
					<i className='fa-solid fa-chevron-right'></i>
				</div>
				<div
					className='hv fr-sb'
					onClick={() => {
						dispatch(handleSettingDD(false));
						dispatch(logout());
					}}
				>
					<div className='fr-sb'>
						<IconContainer>
							<i className='fa-solid fa-arrow-right-from-bracket'></i>
						</IconContainer>
						<p>Log Out</p>
					</div>
				</div>
			</SettingsDiv>
		</>
	);
}

export default MainDD;
