import styled from "styled-components";

export const SettingsContainer = styled.div`
	position: fixed;
	z-index: 12;
	right: 0;
	margin-right: 20px;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
`;
export const ArrowContainer = styled.div`
	margin: 10px 0;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	.arrow {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		background-color: ${({ theme }) => theme.searchBGC};
		display: flex;
		justify-content: center;
		align-items: center;
		:hover {
			cursor: pointer;
			background-color: ${({ theme, active }) => (active ? null : theme.hoverBGC)};
		}
		i {
			font-size: 20px;
			color: ${({ theme, active }) => (active ? theme.headerBGC : "black")};
		}
	}
`;
export const SettingsDropDownContainer = styled.div`
	height: ${({ height }) => height};
	padding: 10px;
	margin-top: -5px;
	border-radius: 10px;
	background-color: ${({ theme }) => theme.cardsBGC};
	box-shadow: ${({ theme }) => theme.mainBS};
	display: flex;
	flex-direction: column;
	transition: height 200ms;
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
		background-color: ${({ theme }) => theme.hoverBGC};
	}
	img {
		width: 60px;
		height: 60px;
		margin-right: 20px;
		border-radius: 50%;
	}
	h1 {
		font-weight: bold;
		font-size: 1rem;
	}
	p {
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
			background-color: ${({ theme }) => theme.hoverBGC};
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
	background-color: ${({ theme }) => theme.iconBGC};
	display: flex;
	justify-content: center;
	align-items: center;
	i {
		font-size: 20px;
	}
`;

//display Drop Down
export const DisplayDDHeader = styled.div`
	width: 100%;
	padding-right: 35px;
	margin-bottom: 15px;
	display: flex;
	flex-direction: row;
	align-items: center;
	h1 {
		font-size: 1.5rem;
		font-weight: bold;
	}
`;
export const DisplayDiv = styled.div`
	width: 100%;
	min-height: 120px;
	padding-left: 10px;
	display: flex;
	flex-direction: row;
	.content {
		max-width: 280px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		flex-grow: 1;
		h6 {
			font-size: 1rem;
			font-weight: bold;
			line-height: 1.1rem;
		}
		p {
			max-width: 100%;
			font-size: 0.8rem;
			color: #65676b;
		}
	}
	.toggle {
		width: 100%;
		height: 30px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		input {
			width: 18px;
			height: 18px;
		}
	}
`;
