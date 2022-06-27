import { useDispatch } from "react-redux";
import { handleSettingDDContent } from "../../../features/dropDown/dropDownSlice";
import { Arrow, DisplayDDHeader, DisplayDiv, IconContainer } from "../../../styles/Header";

function DisplayDD() {
	const dispatch = useDispatch();

	return (
		<>
			<DisplayDDHeader>
				<Arrow
					active={true}
					onClick={() => {
						dispatch(handleSettingDDContent("main"));
					}}
				>
					<i className='fa-solid fa-arrow-left'></i>
				</Arrow>
				<h1>Display & Accessibility</h1>
			</DisplayDDHeader>
			<DisplayDiv>
				<IconContainer>
					<i className='fa-solid fa-moon'></i>
				</IconContainer>
				<div className='content'>
					<span>
						<h6>Dark Mode</h6>
						<p>
							Adjust the appearance of SocialBook to reduce glare and give your eyes a
							break.
						</p>
					</span>
					<div className='toggle'>
						<label htmlFor='Off'>Off</label>
						<input type='radio' name='toggle' id='Off' defaultChecked />
					</div>
					<div className='toggle'>
						<label htmlFor='On'>On</label>
						<input type='radio' name='toggle' id='On' />
					</div>
				</div>
			</DisplayDiv>
		</>
	);
}

export default DisplayDD;
