import styled from "styled-components";

export const SettingsContainer = styled.div`
	position: fixed;
	right: 0;
	margin-right: 20px;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
`;
export const ArrowContainer = styled.div`
	width: 40px;
	height: 40px;
	margin: 10px 0;
	border-radius: 50%;
	background-color: rgb(215, 215, 215);
	display: flex;
	justify-content: center;
	align-items: center;
	:hover {
		cursor: pointer;
		background-color: rgb(191, 191, 191);
	}
	i {
		font-size: 20px;
		color: #2d9dd3; //TODO : turn blue when active
	}
`;
export const SettingsDropDownContainer = styled.div`
	min-height: 100px;
	padding: 10px;
	margin-top: -5px;
	border-radius: 10px;
	background-color: white;
	display: ${(props) => (props.active ? "flex" : "none")};
	flex-direction: column;
	hr {
		background: #dadde1;
		border-width: 0;
		height: 1px;
		width: 300px;
		margin: 10px 5px;
	}
`;
export const ProfileDiv = styled.div`
	width: 300px;
	padding: 5px;
	border-radius: 10px;
	display: flex;
	flex-direction: row;
	align-items: center;
	:hover {
		cursor: pointer;
		background-color: rgba(215, 215, 215, 0.3);
	}
	img {
		width: 60px;
		height: 60px;
		margin-right: 20px;
		border-radius: 50%;
		border: 1px solid;
	}

	.name {
		font-weight: bold;
		font-size: 1rem;
	}
	.date {
		color: grey;
		width: fit-content;
		font-size: 0.9rem;
	}
`;
export const SettingsDiv = styled.div`
	width: 300px;
	height: 130px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	div.hv {
		padding: 5px;
		border-radius: 10px;
		:hover {
			cursor: pointer;
			background-color: rgba(215, 215, 215, 0.3);
		}
	}
	div.fr-sb {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		p {
			font-size: 0.9rem;
		}
	}
`;
export const IconContainer = styled.div`
	width: 35px;
	height: 35px;
	margin: 0 10px 0 0;
	border-radius: 50%;
	background-color: rgb(215, 215, 215);
	display: flex;
	justify-content: center;
	align-items: center;
	i {
		font-size: 20px;
	}
`;
