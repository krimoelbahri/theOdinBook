import { Skeleton } from "@mantine/core";
import { useDispatch } from "react-redux";
import { handleCPModal } from "../../../features/Modal/modalSlice";

function CoverPic({ currentUser, user, loading }) {
	const dispatch = useDispatch();

	return (
		<Skeleton visible={loading} className='wrapper'>
			<img src={user?.coverPic?.url} alt='Cover' />
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
