import { Skeleton } from "@mantine/core";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { handleCPModal } from "../../../features/Modal/modalSlice";
import { useParams } from "react-router-dom";

function CoverPic({ currentUser, user }) {
	const dispatch = useDispatch();
	const [loaded, setloaded] = useState(false);
	const { id } = useParams();

	useEffect(() => {
		setloaded(false);
	}, [id]);
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
