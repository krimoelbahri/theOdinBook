import { MainContainer } from "../../styles/home.styled";
import { Post, CreatePost } from "../post components";
import Spinner from "../Spinner";
import { useGetUserPostsQuery } from "../../features/posts/post-api-query";
import { useEffect } from "react";
import { errorNotification } from "../../helpers/notification";

function Main() {
	const { data = [], isLoading, isError, error } = useGetUserPostsQuery();
	useEffect(() => {
		if (isError) errorNotification(error, "m-p-Error");
	}, [isError, error]);
	return (
		<MainContainer>
			<CreatePost />
			{isLoading ? (
				<Spinner />
			) : (
				<>
					{data?.map((post) => (
						<Post key={post._id} post={post} />
					))}
				</>
			)}
		</MainContainer>
	);
}

export default Main;
