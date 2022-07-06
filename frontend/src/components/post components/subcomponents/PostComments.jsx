import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import uuid from "react-uuid";
import { addingComment, deletingComment } from "../../../features/posts/postSlice";
import {
	PostCommentsContainer,
	ShowCommentsDiv,
	AddCommentsDiv,
	CommentsDiv,
} from "../../../styles/Post.styled";

function PostComments({ postComments, setComments, postId }) {
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
				<Comments key={comment?._id} comment={comment} deletComment={handleDeleteComment} />
			))}
		</PostCommentsContainer>
	);
}

function Comments({ comment, deletComment }) {
	const [deleteLoading, setDeleteLoading] = useState(false);
	const [deleteIcon, setDeleteIcon] = useState(false);
	const text = useRef();

	useEffect(() => {
		text.current.innerText = comment?.text;
	}, [comment]);

	return (
		<CommentsDiv>
			<div>
				<img src={comment?.author?.profilePic} alt='' />
				<div>
					<div>
						<p className='c-p'>{comment?.author?.name}</p>
						<span ref={text}></span>
					</div>
				</div>
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
								style={{ "--fa-animation-iteration-count": 1, color: "red" }}
							></i>
						)}
					</div>
				) : (
					<div className='icon'>
						<i className='fa-solid fa-spinner fa-spin-pulse'></i>
					</div>
				)}
			</div>
		</CommentsDiv>
	);
}
export default PostComments;
