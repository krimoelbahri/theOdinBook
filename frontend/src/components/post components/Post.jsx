import React from "react";
import { PostContainer } from "../../styles/Post.styled";
import { PostHeader, PostComments, PostDescription, PostImg, PostReactions } from "./subcomponents";
function Post({ post }) {
	return (
		<PostContainer>
			<PostHeader user={post?.author} date={post?.createdAt} />
			<PostDescription description={post?.description} />
			<PostImg url={post?.postImage} />
			<PostReactions comments={post?.comments} likes={post?.likes} />
			<PostComments comments={post?.comments} />
		</PostContainer>
	);
}

export default Post;
