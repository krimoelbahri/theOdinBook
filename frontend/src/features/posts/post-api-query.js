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
	tagTypes: ["Post"],
	endpoints: (builder) => ({
		getUserPosts: builder.query({
			query: () => ({ url: `` }),
			providesTags: ["Post"],
		}),
		getProfilePosts: builder.query({
			query: (id) => ({ url: `user/${id}` }),
			providesTags: ["Post"],
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
			invalidatesTags: ["Post"],
		}),
		deletePost: builder.mutation({
			query: (id) => ({
				url: `${id}`,
				method: "DELETE",
				headers: getConfig(),
			}),
			invalidatesTags: ["Post"],
		}),
		addComment: builder.mutation({
			query: ({ id, ...data }) => ({
				url: `${id}/comment`,
				method: "POST",
				body: data,
				headers: getConfig(),
			}),
			invalidatesTags: ["Post"],
		}),
		deleteComment: builder.mutation({
			query: ({ id, commentId }) => ({
				url: `${id}/comment/${commentId}`,
				method: "DELETE",
				headers: getConfig(),
			}),
			invalidatesTags: ["Post"],
		}),
		addLike: builder.mutation({
			query: ({ id, ...data }) => ({
				url: `${id}/like`,
				method: "POST",
				body: data,
				headers: getConfig(),
			}),
			invalidatesTags: ["Post"],
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
