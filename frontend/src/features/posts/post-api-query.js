import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
let URL = "/api/posts/";
function getConfig() {
	let user = JSON.parse(localStorage.getItem("user"));
	const config = {
		Authorization: `Bearer ${user?.token}`,
	};
	return config;
}
const baseQuery = fetchBaseQuery({
	baseUrl: URL,
});

export const postApi = createApi({
	reducerPath: "postApi",
	baseQuery,
	tagTypes: ["Posts"],
	endpoints: (builder) => ({
		getUserPosts: builder.query({
			query: () => ({ url: `` }),
			providesTags: (result) =>
				// is result available?
				result
					? // successful query
					  [
							...result.map(({ _id }) => ({ type: "Posts", id: _id })),
							{ type: "Posts", id: "LIST" },
					  ]
					: // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
					  [{ type: "Posts", id: "LIST" }],
		}),
		getProfilePosts: builder.query({
			query: (id) => ({ url: `user/${id}` }),
			providesTags: (result) =>
				// is result available?
				result
					? // successful query
					  [
							...result.map(({ _id }) => ({ type: "Posts", id: _id })),
							{ type: "Posts", id: "LIST" },
					  ]
					: // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
					  [{ type: "Posts", id: "LIST" }],
		}),
		getPost: builder.query({
			query: (id) => ({ url: `${id}` }),
			providesTags: ["Post"],
		}),
		addPost: builder.mutation({
			query: (data) => ({
				url: "",
				method: "POST",
				body: data,
				headers: getConfig(),
			}),
			invalidatesTags: [{ type: "Posts", id: "LIST" }],
		}),
		deletePost: builder.mutation({
			query: (id) => ({
				url: `${id}`,
				method: "DELETE",
				headers: getConfig(),
			}),
			invalidatesTags: [{ type: "Posts", id: "LIST" }],
		}),
		addComment: builder.mutation({
			query: ({ id, ...data }) => ({
				url: `${id}/comment`,
				method: "POST",
				body: data,
				headers: getConfig(),
			}),
			invalidatesTags: (result, error, { id }) => [{ type: "Posts", id }],
		}),
		deleteComment: builder.mutation({
			query: ({ id, commentId }) => ({
				url: `${id}/comment/${commentId}`,
				method: "DELETE",
				headers: getConfig(),
			}),
			invalidatesTags: (result, error, { id }) => [{ type: "Posts", id }],
		}),
		addLike: builder.mutation({
			query: ({ id, ...data }) => ({
				url: `${id}/like`,
				method: "POST",
				body: data,
				headers: getConfig(),
			}),
			invalidatesTags: (result, error, { id }) => [{ type: "Posts", id }],
		}),
	}),
});

export const {
	useGetUserPostsQuery,
	useGetProfilePostsQuery,
	useGetPostQuery,
	useAddPostMutation,
	useDeletePostMutation,
	useAddCommentMutation,
	useDeleteCommentMutation,
	useAddLikeMutation,
} = postApi;
