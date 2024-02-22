import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const UserAuthApi = createApi({
  reducerPath: "user-authentication",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/v1",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    signUpUser: builder.mutation({
      query: (data) => ({
        url: "/auth/register",
        method: "post",
        body: data,
      }),
    }),
    loginUser: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "post",
        body: data,
      }),
    }),
    // getCurrentUser: builder.query({
    //   query: () => ({
    //     url: `/users/me`,
    //     method: "GET",
    //   }),
    // }),
  }),
});

export const {
  useSignUpUserMutation,
  useLoginUserMutation,
  //   useGetCurrentUserQuery,
} = UserAuthApi;
