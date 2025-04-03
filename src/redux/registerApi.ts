import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api/auth" }), // Ensure this is correct
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (userData) => ({
        url: "/register", // Make sure this matches your backend route
        method: "POST",
        body: userData,
        headers: { "Content-Type": "application/json" },
      }),
    }),
  }),
});

export const { useRegisterUserMutation } = userApi;
