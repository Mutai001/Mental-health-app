import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface LoginResponse {
  token: string;
  role: "admin" | "user" | "therapist"; // Ensuring expected role values
}

// export const loginApi = createApi({
//   reducerPath: "loginApi",
//   baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api" }),
//   endpoints: (builder) => ({
//     loginUser: builder.mutation<LoginResponse, { email: string; password: string }>({
//       query: (credentials) => ({
//         url: "/login",
//         method: "POST",
//         body: credentials,
//       }),
//     }),
//   }),
// });

export const loginApi = createApi({
  reducerPath: "loginApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api" }),
  endpoints: (builder) => ({
    loginUser: builder.mutation<LoginResponse, FormData>({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginUserMutation } = loginApi;
