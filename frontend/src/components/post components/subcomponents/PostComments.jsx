import {
	PostCommentsContainer,
	ShowCommentsDiv,
	AddCommentsDiv,
	CommentsDiv,
} from "../../../styles/Post.styled";

function PostComments() {
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
			<CommentsDiv>
				<div>
					<img src='' alt='' />
					<div>
						<div>
							<p className='c-p'>profile name</p>
							<span>this is a sample comment</span>
						</div>
					</div>
					<i className='fa-solid fa-ellipsis c-p'></i>
				</div>
			</CommentsDiv>
		</PostCommentsContainer>
	);
}

export default PostComments;
