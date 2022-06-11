import { useDispatch } from "react-redux";
import { logout } from "../../../features/auth/userSlice";
import {
	ProfileDiv,
	SettingsDiv,
	IconContainer,
} from "../../../styles/Header/SettingsAccount-styled";

function SettingDropDown() {
	const dispatch = useDispatch();

	return (
		<>
			<ProfileDiv>
				<img className='c-p' src='' alt='' />
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
				<div className='hv fr-sb' onClick={() => dispatch(logout())}>
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

export default SettingDropDown;