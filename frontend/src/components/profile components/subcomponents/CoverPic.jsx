import { useSelector } from "react-redux";

function CoverPic() {
	const { user } = useSelector((state) => state.user);

	return (
		<div className='wrapper'>
			<img src={user.coverPic} alt='Cover' />
			<button>Edit Cover Photo</button>
			<div></div> {/*TODO: Edit DD */}
		</div>
	);
}

export default CoverPic;
