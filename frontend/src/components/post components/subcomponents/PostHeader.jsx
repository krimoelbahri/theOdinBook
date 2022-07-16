import { useState } from "react";
import { useClickOutside } from "@mantine/hooks";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deletePost, removePost } from "../../../features/posts/postSlice";
import { PostHeaderContainer, PostHeaderDD, ProfileDiv } from "../../../styles/Post.styled";

function PostHeader({ user, date, postId, postIndex }) {
	const DD = useClickOutside(() => setIsActive(false));
	const dispatch = useDispatch();

	const [isActive, setIsActive] = useState(false);
	const [isDeleting, setIsDeleting] = useState(false);

	async function handleDeletePost() {
		setIsDeleting(true);
		try {
			await dispatch(deletePost(postId)).unwrap();
			dispatch(removePost(postIndex));
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<PostHeaderContainer>
			<ProfileDiv>
				<Link to={`/${user._id}`}>
					<img className='c-p' src={user?.profilePic.url} alt='' />
				</Link>
				<div>
					<Link to={`/${user._id}`}>
						<p className='name c-p'>{user?.name}</p>
					</Link>
					<p className='date c-p'>{date}</p>
				</div>
			</ProfileDiv>
			<div style={{ position: "relative" }} ref={DD}>
				{!isDeleting && (
					<>
						<div
							className='icon c-p'
							onClick={() => (!isActive ? setIsActive(true) : setIsActive(false))}
						>
							<i className='fa-solid fa-ellipsis'></i>
						</div>
						<PostHeaderDD active={isActive}>
							<div className='c-p' onClick={handleDeletePost}>
								<i className='fa-solid fa-trash-can '></i>
								<p>Delete</p>
							</div>
						</PostHeaderDD>
					</>
				)}
				{isDeleting && (
					<div className='icon'>
						<i className='fa-solid fa-spinner fa-spin-pulse'></i>
					</div>
				)}
			</div>
		</PostHeaderContainer>
	);
}

export default PostHeader;
