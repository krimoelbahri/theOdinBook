import { useEffect, useState } from "react";
import { useAuth } from "../../../App";
import { useAddLikeMutation } from "../../../features/posts/post-api-query";
import {
	PostReactionContainer,
	ReactionButtonsDiv,
	ReactionsStatsDiv,
} from "../../../styles/Post.styled";

function PostReactions({ postComments, postLikes, postId, setShowComments }) {
	const [addLike] = useAddLikeMutation();
	const { user } = useAuth();

	const [isLiked, setIsLiked] = useState(false);

	async function handleLike() {
		setIsLiked((state) => !state);
		try {
			await addLike({ author: user._id, id: postId }).unwrap();
		} catch (error) {
			setIsLiked(false);
		}
	}

	useEffect(() => {
		if (postLikes.every((element) => element._id !== user._id)) {
			setIsLiked(false);
		} else {
			setIsLiked(true);
		}
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
