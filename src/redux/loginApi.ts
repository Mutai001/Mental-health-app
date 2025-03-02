import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define the expected response type
interface LoginResponse {
  token: string;
  role: "admin" | "user" | "therapist";
}

// Define login request type
interface LoginRequest {
  email: string;
  password: string;
}

export const loginApi = createApi({
  reducerPath: "loginApi",
  baseQuery: fetchBaseQuery({ 
    baseUrl: "http://localhost:8000/api",
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginUserMutation } = loginApi;