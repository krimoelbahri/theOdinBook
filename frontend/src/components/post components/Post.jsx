import { useState } from "react";
import { PostContainer } from "../../styles/Post.styled";
import { PostHeader, PostComments, PostDescription, PostImg, PostReactions } from "./subcomponents";
function Post({ post, postIndex }) {
	const { author, createdAt, description, postImage, comments, likes, _id } = post;
	const [postComments, setComments] = useState(comments);
	const [postLikes, setPostLikes] = useState(likes);
	const [showComments, setShowComments] = useState(false);

	return (
		<PostContainer>
			<PostHeader user={author} date={createdAt} postId={_id} postIndex={postIndex} />
			<PostDescription description={description} />
			<PostImg url={postImage} />
			<PostReactions
				postComments={postComments}
				postLikes={postLikes}
				setPostLikes={setPostLikes}
				postId={_id}
				setShowComments={setShowComments}
			/>
			{showComments && (
				<PostComments postComments={postComments} setComments={setComments} postId={_id} />
			)}
		</PostContainer>
	);
}

export default Post;
