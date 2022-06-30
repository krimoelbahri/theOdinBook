import {
	PostReactionContainer,
	ReactionButtonsDiv,
	ReactionsStatsDiv,
} from "../../../styles/Post.styled";

function PostReactions({ comments, likes }) {
	return (
		<PostReactionContainer>
			<ReactionsStatsDiv className='b-b'>
				<div>
					<div>emojies</div>
					<p>{likes?.length}</p>
				</div>
				<div>
					<p>{comments?.length} Comments</p>
				</div>
			</ReactionsStatsDiv>
			<ReactionButtonsDiv>
				<div>
					<i className='fa-solid fa-thumbs-up'></i>
					<p>Like</p>
				</div>
				<div>
					<i className='fa-solid fa-message'></i>
					<p>Comment</p>
				</div>
			</ReactionButtonsDiv>
		</PostReactionContainer>
	);
}

export default PostReactions;
