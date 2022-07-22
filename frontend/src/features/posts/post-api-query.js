import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
let URL = "/api/posts/";

const baseQuery = fetchBaseQuery({
	baseUrl: URL,
});

export const postApi = createApi({
	reducerPath: "postApi",
	baseQuery,
	endpoints: (builder) => ({
		getUserPosts: builder.query({
			query: () => ({ url: `` }),
		}),
		getProfilePosts: builder.query({
			query: (id) => ({ url: `user/${id}` }),
		}),
		getPost: builder.query({
			query: (id) => ({ url: `${id}` }),
		}),
	}),
});

export const { useGetUserPostsQuery, useGetProfilePostsQuery, useGetPostQuery } = postApi;
