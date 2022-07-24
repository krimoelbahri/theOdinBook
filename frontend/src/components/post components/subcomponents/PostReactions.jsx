import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAddLikeMutation } from "../../../features/posts/post-api-query";
import {
	PostReactionContainer,
	ReactionButtonsDiv,
	ReactionsStatsDiv,
} from "../../../styles/Post.styled";

function PostReactions({ postComments, postLikes, postId, setPostLikes, setShowComments }) {
	const [addLike] = useAddLikeMutation();
	const { user } = useSelector((state) => state.user);

	const [isLiked, setIsLiked] = useState(false);
	const [index, setIndex] = useState(null);

	async function handleLike() {
		if (!isLiked) {
			setPostLikes((state) => [{ _id: user._id }, ...state]);
		} else {
			let likes = [...postLikes];
			likes.splice(index, 1);
			setPostLikes(likes);
			setIsLiked(false);
			setIndex(null);
		}
		try {
			let result = await addLike({ author: user._id, id: postId }).unwrap();
			setPostLikes(result);
		} catch (error) {
			setIsLiked(false);
			setIndex(null);
		}
	}

	useEffect(() => {
		postLikes.forEach((element, i) => {
			if (element._id === user._id) {
				setIsLiked(true);
				setIndex(i);
			}
		});
	}, [postLikes, user]);

	return (
		<PostReactionContainer>
			<ReactionsStatsDiv className='b-b'>
				<div>
					{postLikes.length !== 0 && (
						<>
							<div>
								<i
									className={`fa-solid fa-thumbs-up`}
									style={{ color: "#2d9dd3" }}
								></i>
							</div>
							<p>{postLikes.length}</p>
						</>
					)}
				</div>
				<div onClick={() => setShowComments((state) => !state)}>
					<p>{postComments.length} Comments</p>
				</div>
			</ReactionsStatsDiv>
			<ReactionButtonsDiv isLiked={isLiked}>
				<div onClick={handleLike}>
					<i
						className={`fa-solid fa-thumbs-up ${isLiked ? "fa-beat" : null} like-icon`}
						style={{
							"--fa-animation-iteration-count": 1,
							"--fa-animation-duration": "200ms",
						}}
					></i>
					<p className='like-icon'>Like</p>
				</div>
				<div onClick={() => setShowComments(true)}>
					<i className='fa-solid fa-message'></i>
					<p>Comment</p>
				</div>
			</ReactionButtonsDiv>
		</PostReactionContainer>
	);
}

export default PostReactions;
