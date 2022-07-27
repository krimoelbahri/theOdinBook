import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../App";
import { useLogoutMutation } from "../../../features/auth/user-api-query";
import { handleSettingDD, handleSettingDDContent } from "../../../features/dropDown/dropDownSlice";
import {
	ProfileDiv,
	SettingsDiv,
	IconContainer,
} from "../../../styles/Header/SettingsAccount-styled";

function MainDD() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [logout] = useLogoutMutation();
	const { user } = useAuth();

	return (
		<>
			<ProfileDiv
				onClick={() => {
					dispatch(handleSettingDD(false));
					navigate(`/${user._id}`);
				}}
			>
				<img className='c-p' src={user.profilePic.url} alt='profile' />
				<div>
					<h1>{user.name}</h1>
					<p>see your profile</p>
				</div>
			</ProfileDiv>
			<hr />
			<SettingsDiv>
				<div
					className='hv fr-sb'
					onClick={() => {
						/*TODO: handle settings DD */
					}}
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
					onClick={async () => {
						dispatch(handleSettingDD(false));
						await logout().unwrap();
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
