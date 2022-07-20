import { Skeleton } from "@mantine/core";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { handleCPModal } from "../../../features/Modal/modalSlice";

function CoverPic({ currentUser, user }) {
	const dispatch = useDispatch();
	const [loaded, setloaded] = useState(false);

	return (
		<Skeleton visible={!loaded} className='wrapper'>
			<img onLoad={() => setloaded(true)} src={user?.coverPic.url} alt='Cover' />
			{currentUser && (
				<button onClick={() => dispatch(handleCPModal(true))}>
					<i className='fa-solid fa-camera'></i>
					Edit Cover Photo
				</button>
			)}
		</Skeleton>
	);
}

export default CoverPic;
