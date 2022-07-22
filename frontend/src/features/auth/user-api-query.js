import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
let URL = "/api/user/";

const baseQuery = fetchBaseQuery({
	baseUrl: URL,
});

export const userApi = createApi({
	reducerPath: "userApi",
	baseQuery,
	endpoints: (builder) => ({
		getUsers: builder.query({
			query: () => ({ url: `getUsers` }),
		}),
		getUser: builder.query({
			query: (id) => ({ url: id }),
		}),
	}),
});

export const { useGetUserQuery, useGetUsersQuery } = userApi;
