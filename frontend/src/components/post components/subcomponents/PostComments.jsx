import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import uuid from "react-uuid";
import { addingComment, deletingComment } from "../../../features/posts/postSlice";
import {
	PostCommentsContainer,
	ShowCommentsDiv,
	AddCommentsDiv,
	CommentsDiv,
} from "../../../styles/Post.styled";

function PostComments({ comments, postId }) {
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.user);

	const [postComments, setComments] = useState(comments);
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

	function handleChange(e) {
		e.target.style.height = 0;
		e.target.style.height = `${e.target.scrollHeight}px`;
		setData((state) => ({ ...state, text: e.target.value }));
		setAddedComment((state) => ({ ...state, text: e.target.value }));
	}

	async function handleSubmit(e) {
		e.preventDefault();
		textArea.current.value = "";
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
			<ShowCommentsDiv>
				<p>show all</p>
			</ShowCommentsDiv>
			<AddCommentsDiv>
				<img src={user.profilePic} alt='' />
				<div>
					<form onSubmit={handleSubmit}>
						<textarea
							type='textArea'
							placeholder='Write a comment...'
							onInput={handleChange}
							ref={textArea}
						/>
						<button type='submit' className='c-p'>
							<i className='fa-solid fa-paper-plane'></i>
						</button>
					</form>
				</div>
			</AddCommentsDiv>
			{postComments?.map((comment) => (
				<CommentsDiv key={comment?._id}>
					<div>
						<img src={comment?.author?.profilePic} alt='' />
						<div>
							<div>
								<p className='c-p'>{comment?.author?.name}</p>
								<span>{comment?.text}</span>
							</div>
						</div>
						<i
							className='fa-solid fa-ellipsis c-p'
							id={comment?._id}
							onClick={(e) => handleDeleteComment(e, comment)}
						></i>
					</div>
				</CommentsDiv>
			))}
		</PostCommentsContainer>
	);
}

export default PostComments;
