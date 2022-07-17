import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import uuid from "react-uuid";
import { addingComment, deletingComment } from "../../../features/posts/postSlice";
import { PostCommentsContainer, AddCommentsDiv, CommentsDiv } from "../../../styles/Post.styled";

function PostComments({ author, postComments, setComments, postId }) {
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.user);

	const [data, setData] = useState({ text: "", author: user._id, postId });
	const [addedComment, setAddedComment] = useState({
		_id: uuid(),
		text: null,
		author: { _id: user._id, name: user.name, profilePic: user.profilePic },
	});
	const textArea = useRef();

	function resetState() {
		setData({ text: "", author: user._id, postId });
		setAddedComment({
			_id: uuid(),
			text: null,
			author: { _id: user._id, name: user.name, profilePic: user.profilePic },
		});
	}

	async function handleDeleteComment(e, comment) {
		let data = { commentId: e.target.id, postId };
		try {
			await dispatch(deletingComment(data)).unwrap();
			let comments = [...postComments];
			comments.splice(comments.indexOf(comment), 1);
			setComments(comments);
		} catch (error) {
			console.log(error);
		}
	}

	function handleChange(target) {
		target.style.height = 0;
		target.style.height = `${target.scrollHeight}px`;
		setData((state) => ({ ...state, text: target.value }));
		setAddedComment((state) => ({ ...state, text: target.value }));
	}

	async function handleSubmit(e) {
		e.preventDefault();
		textArea.current.value = "";
		handleChange(textArea.current);
		resetState();
		if (addedComment.text) setComments((state) => [addedComment, ...state]);
		try {
			const result = await dispatch(addingComment(data)).unwrap();
			setComments([result, ...postComments]);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<PostCommentsContainer>
			<AddCommentsDiv>
				<img src={user.profilePic.url} alt='' />
				<div>
					<form onSubmit={handleSubmit}>
						<textarea
							type='textArea'
							placeholder='Write a comment...'
							onInput={(e) => handleChange(e.target)}
							ref={textArea}
						/>
						<button type='submit' className='c-p'>
							<i className='fa-solid fa-paper-plane'></i>
						</button>
					</form>
				</div>
			</AddCommentsDiv>
			{postComments?.map((comment) => (
				<Comments
					key={comment?._id}
					author={author}
					user={user}
					comment={comment}
					deletComment={handleDeleteComment}
				/>
			))}
		</PostCommentsContainer>
	);
}

function Comments({ user, author, comment, deletComment }) {
	const [deleteLoading, setDeleteLoading] = useState(false);
	const [deleteIcon, setDeleteIcon] = useState(false);
	const [deleting, setDeleting] = useState(false);
	const text = useRef();

	useEffect(() => {
		text.current.innerText = comment?.text;
	}, [comment]);

	useEffect(() => {
		if (user._id === author._id || user._id === comment?.author?._id) {
			setDeleting(true);
		}
	}, [user, comment, author]);

	return (
		<CommentsDiv>
			<div>
				<img src={comment?.author?.profilePic.url} alt='' />
				<div>
					<div>
						<p className='c-p'>{comment?.author?.name}</p>
						<span ref={text}></span>
					</div>
				</div>
				{deleting && (
					<>
						{!deleteLoading ? (
							<div
								className='icon'
								onMouseOver={() => setDeleteIcon(true)}
								onMouseOut={() => setDeleteIcon(false)}
							>
								{!deleteIcon ? (
									<i className='fa-solid fa-ellipsis'></i>
								) : (
									<i
										className='fa-solid fa-trash-can fa-flip c-p'
										id={comment?._id}
										onClick={(e) => {
											setDeleteLoading(true);
											deletComment(e, comment).then(() => {
												setDeleteLoading(false);
											});
										}}
										style={{
											"--fa-animation-iteration-count": 1,
											color: "red",
										}}
									></i>
								)}
							</div>
						) : (
							<div className='icon'>
								<i className='fa-solid fa-spinner fa-spin-pulse'></i>
							</div>
						)}
					</>
				)}
			</div>
		</CommentsDiv>
	);
}
export default PostComments;
