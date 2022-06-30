function CoverPic({ user }) {
	return (
		<div className='wrapper'>
			<img src={user?.coverPic} alt='Cover' />
			<button>Edit Cover Photo</button>
			<div></div> {/*TODO: Edit DD */}
		</div>
	);
}

export default CoverPic;
