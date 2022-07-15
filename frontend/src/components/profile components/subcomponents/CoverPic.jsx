import { Skeleton } from "@mantine/core";
import { useState } from "react";

function CoverPic({ user }) {
	const [loaded, setloaded] = useState(false);

	return (
		<Skeleton visible={!loaded} className='wrapper'>
			<img onLoad={() => setloaded(true)} src={user?.coverPic} alt='Cover' />
			<button>
				<i className='fa-solid fa-camera'></i>
				Edit Cover Photo
			</button>
			<div></div> {/*TODO: Edit DD */}
		</Skeleton>
	);
}

export default CoverPic;
