import { useState } from "react";
import { PostContainer } from "../../styles/Post.styled";
import { PostHeader, PostComments, PostDescription, PostImg, PostReactions } from "./subcomponents";

function Post({ post }) {
	const { author, createdAt, description, postImage, comments, likes, _id } = post;
	const [postComments, setComments] = useState(comments);
	const [postLikes, setPostLikes] = useState(likes);
	const [showComments, setShowComments] = useState(false);

	return (
		<PostContainer>
			<PostHeader author={author} date={createdAt} postId={_id} />
			<PostDescription description={description} />
			<PostImg url={postImage.url} />
			<PostReactions
				postComments={postComments}
				postLikes={postLikes}
				setPostLikes={setPostLikes}
				postId={_id}
				setShowComments={setShowComments}
			/>
			{showComments && (
				<PostComments
					author={author}
					postComments={postComments}
					setComments={setComments}
					postId={_id}
				/>
			)}
		</PostContainer>
	);
}

export default Post;
