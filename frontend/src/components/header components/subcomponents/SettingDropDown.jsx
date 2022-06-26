import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../features/auth/userSlice";
import { handleSettingDD } from "../../../features/dropDown/dropDownSlice";
import {
	ProfileDiv,
	SettingsDiv,
	IconContainer,
	SettingsDropDownContainer,
} from "../../../styles/Header/SettingsAccount-styled";

function SettingDropDown() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { user } = useSelector((state) => state.user);

	return (
		<SettingsDropDownContainer>
			<ProfileDiv
				onClick={() => {
					dispatch(handleSettingDD(false));
					navigate(`/${user._id}`);
				}}
			>
				<img className='c-p' src={user.profilePic} alt='profile' />
				<div>
					<p className='name '>Profile name</p>
					<p className='date '>see your profile</p>
				</div>
			</ProfileDiv>
			<hr />
			<SettingsDiv>
				<div className='hv fr-sb'>
					<div className='fr-sb'>
						<IconContainer>
							<i className='fa-solid fa-gear'></i>
						</IconContainer>
						<p>Settings</p>
					</div>
					<i className='fa-solid fa-chevron-right'></i>
				</div>
				<div className='hv fr-sb'>
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
		</SettingsDropDownContainer>
	);
}

export default SettingDropDown;
