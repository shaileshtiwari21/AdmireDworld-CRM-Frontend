import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const JansamvaadApi = createApi({
  reducerPath: "jan-samvaad",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shravankumar.in/api",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  
  }),
  endpoints: (builder) => ({
    getUserMessages: builder.query({
      query: (page) => ({
        url: `/messages?page=${page}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
 useGetUserMessagesQuery
} = JansamvaadApi;
