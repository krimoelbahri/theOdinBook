import { useState } from "react";
import { PostContainer } from "../../styles/Post.styled";
import { PostHeader, PostComments, PostDescription, PostImg, PostReactions } from "./subcomponents";

function Post({ post }) {
	const { author, createdAt, description, postImage, comments, likes, _id } = post;
	const [showComments, setShowComments] = useState(false);

	return (
		<PostContainer>
			<PostHeader author={author} date={createdAt} postId={_id} />
			<PostDescription description={description} />
			<PostImg url={postImage.url} />
			<PostReactions
				postComments={comments}
				postLikes={likes}
				postId={_id}
				setShowComments={setShowComments}
			/>
			{showComments && <PostComments author={author} postComments={comments} postId={_id} />}
		</PostContainer>
	);
}

export default Post;
