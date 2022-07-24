import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

let URL = "/api/user/";

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

export const userApi = createApi({
	reducerPath: "userApi",
	baseQuery,
	tagTypes: ["User"],
	endpoints: (builder) => ({
		getUsers: builder.query({
			query: () => ({ url: `getUsers` }),
			providesTags: ["User"],
		}),
		getUser: builder.query({
			query: (id) => ({ url: `${id}` }),
			providesTags: ["User"],
		}),
		updateUser: builder.mutation({
			query: ({ id, ...rest }) => {
				let formData = new FormData();
				formData.append("imgFile", rest.imgFile);
				formData.append("action", rest.action);
				return {
					url: `${id}`,
					method: "PUT",
					body: formData,
					headers: getConfig(),
				};
			},
			invalidatesTags: ["User"],
		}),
	}),
});

export const { useGetUserQuery, useGetUsersQuery, useUpdateUserMutation } = userApi;
