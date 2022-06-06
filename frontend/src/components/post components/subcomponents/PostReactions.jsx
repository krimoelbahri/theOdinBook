import {
	PostReactionContainer,
	ReactionButtonsDiv,
	ReactionsStatsDiv,
} from "../../../styles/Post.styled";

function PostReactions() {
	return (
		<PostReactionContainer>
			<ReactionsStatsDiv className='b-b'>
				<div>
					<div>emojies</div>
					<p>Likes Number</p>
				</div>
				<div>
					<p>Comments Number</p>
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
