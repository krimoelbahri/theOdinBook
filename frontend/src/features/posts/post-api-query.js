import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
let URL = "/api/posts/";

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
			query: (data) => {
				let formData = new FormData();
				formData.append("imgFile", data.imgFile);
				formData.append("description", data.description);
				formData.append("author", data.author);
				return {
					url: "",
					method: "POST",
					body: formData,
					headers: {
						Authorization: `Bearer ${data.token}`,
					},
				};
			},
			invalidatesTags: [{ type: "Posts", id: "LIST" }],
		}),
		deletePost: builder.mutation({
			query: ({ id, token }) => ({
				url: `${id}`,
				method: "DELETE",
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}),
			invalidatesTags: [{ type: "Posts", id: "LIST" }],
		}),
		addComment: builder.mutation({
			query: ({ id, token, ...data }) => ({
				url: `${id}/comment`,
				method: "POST",
				body: data,
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}),
			invalidatesTags: (result, error, { id }) => [{ type: "Posts", id }],
		}),
		deleteComment: builder.mutation({
			query: ({ id, commentId, token }) => ({
				url: `${id}/comment/${commentId}`,
				method: "DELETE",
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}),
			invalidatesTags: (result, error, { id }) => [{ type: "Posts", id }],
		}),
		addLike: builder.mutation({
			query: ({ id, token, ...data }) => ({
				url: `${id}/like`,
				method: "POST",
				body: data,
				headers: {
					Authorization: `Bearer ${token}`,
				},
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
