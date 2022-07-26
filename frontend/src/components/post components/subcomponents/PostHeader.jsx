import { useState } from "react";
import { useClickOutside } from "@mantine/hooks";
import { Link } from "react-router-dom";
import { PostHeaderContainer, PostHeaderDD, ProfileDiv } from "../../../styles/Post.styled";
import { useDeletePostMutation } from "../../../features/posts/post-api-query";
import { useAuth } from "../../../App";
import { errorNotification } from "../../../helpers/notification";

function PostHeader({ author, date, postId }) {
	const DD = useClickOutside(() => setIsActive(false));

	const { user, token } = useAuth();
	const [deletePost] = useDeletePostMutation();

	const [isActive, setIsActive] = useState(false);
	const [isDeleting, setIsDeleting] = useState(false);

	async function handleDeletePost() {
		setIsDeleting(true);
		try {
			await deletePost({ id: postId, token });
		} catch (error) {
			errorNotification(error.data.message, "delete-post");
		}
	}

	return (
		<PostHeaderContainer>
			<ProfileDiv>
				<Link to={`/${author._id}`}>
					<img className='c-p' src={author?.profilePic.url} alt='' />
				</Link>
				<div>
					<Link to={`/${author._id}`}>
						<p className='name c-p'>{author?.name}</p>
					</Link>
					<p className='date c-p'>{date}</p>
				</div>
			</ProfileDiv>
			{user._id === author._id && (
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
			)}
		</PostHeaderContainer>
	);
}

export default PostHeader;
