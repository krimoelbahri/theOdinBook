import React from "react";
import { PostContainer } from "../../styles/Post.styled";
import { PostHeader, PostComments, PostDescription, PostImg, PostReactions } from "./subcomponents";
function Post() {
	return (
		<PostContainer>
			<PostHeader />
			<PostDescription />
			<PostImg />
			<PostReactions />
			<PostComments />
		</PostContainer>
	);
}

export default Post;
