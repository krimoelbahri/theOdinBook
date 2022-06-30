import {
	PostCommentsContainer,
	ShowCommentsDiv,
	AddCommentsDiv,
	CommentsDiv,
} from "../../../styles/Post.styled";

function PostComments({ comments }) {
	function handleSubmit(e) {
		e.preventDefault();
	}
	return (
		<PostCommentsContainer>
			<ShowCommentsDiv>
				<p>show all</p>
			</ShowCommentsDiv>
			<AddCommentsDiv>
				<img src='' alt='' />
				<div>
					<form onSubmit={handleSubmit}>
						<input type='text' placeholder='Write a comment...' />
						<button type='submit' className='c-p'>
							<i className='fa-solid fa-paper-plane'></i>
						</button>
					</form>
				</div>
			</AddCommentsDiv>
			{comments?.map((comment) => (
				<CommentsDiv key={comment._id}>
					<div>
						<img src={comment.author.profilePic} alt='' />
						<div>
							<div>
								<p className='c-p'>{comment.author.name}</p>
								<span>{comment.text}</span>
							</div>
						</div>
						<i className='fa-solid fa-ellipsis c-p'></i>
					</div>
				</CommentsDiv>
			))}
		</PostCommentsContainer>
	);
}

export default PostComments;
