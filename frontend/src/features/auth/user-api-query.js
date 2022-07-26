import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
let URL = "/api/user/";

const baseQuery = fetchBaseQuery({
	baseUrl: URL,
});

export const userApi = createApi({
	reducerPath: "userApi",
	baseQuery,
	tagTypes: ["Users", "currentUser"],
	endpoints: (builder) => ({
		getUsers: builder.query({
			query: () => ({ url: `getUsers` }),
			providesTags: ["Users"],
		}),
		getUser: builder.query({
			query: (id) => ({ url: `${id}` }),
			providesTags: ["Users"],
		}),
		getCurrentUser: builder.query({
			query: () => ({ url: `` }),
			providesTags: ["currentUser"],
		}),
		login: builder.mutation({
			query: (data) => {
				return {
					url: "auth/local",
					method: "POST",
					body: data,
				};
			},
			invalidatesTags: ["currentUser"],
		}),
		signup: builder.mutation({
			query: (data) => {
				return {
					url: "signup",
					method: "POST",
					body: data,
				};
			},
			invalidatesTags: ["currentUser"],
		}),
		logout: builder.mutation({
			query: () => {
				return {
					url: "auth/logout",
				};
			},
			invalidatesTags: ["currentUser"],
		}),
		updateUser: builder.mutation({
			query: ({ id, token, ...rest }) => {
				let formData = new FormData();
				formData.append("imgFile", rest.imgFile);
				formData.append("action", rest.action);
				return {
					url: `${id}`,
					method: "PUT",
					body: formData,
					headers: {
						Authorization: `Bearer ${token}`,
					},
				};
			},
			invalidatesTags: ["Users"],
		}),
	}),
});

export const {
	useGetUserQuery,
	useGetUsersQuery,
	useGetCurrentUserQuery,
	useLoginMutation,
	useSignupMutation,
	useLogoutMutation,
	useUpdateUserMutation,
} = userApi;
