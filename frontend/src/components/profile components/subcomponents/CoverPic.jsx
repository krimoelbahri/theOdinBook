import { Skeleton } from "@mantine/core";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useAuth } from "../../../App";
import { handleCPModal } from "../../../features/Modal/modalSlice";

function CoverPic({ profileUser, loading }) {
	const dispatch = useDispatch();
	const [loaded, setImgLoaded] = useState(false);
	const { user } = useAuth();

	return (
		<Skeleton visible={loading || !loaded} className='wrapper'>
			<img onLoad={() => setImgLoaded(true)} src={profileUser?.coverPic?.url} alt='Cover' />
			{user?._id === profileUser?._id && (
				<button onClick={() => dispatch(handleCPModal(true))}>
					<i className='fa-solid fa-camera'></i>
					Edit Cover Photo
				</button>
			)}
		</Skeleton>
	);
}

export default CoverPic;
