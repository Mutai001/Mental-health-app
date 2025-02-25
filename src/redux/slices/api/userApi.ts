// import { userSlice } from "../slices/userSlice"; // Ensure this path is correct

// // Define the expected response and request types
// interface User {
//   id: string;
//   full_name: string;
//   email: string;
//   avatar?: string;
// }

// interface LoginCredentials {
//   email: string;
//   password: string;
// }

// // Ensure `userSlice` is correctly defined in a separate file, e.g., `userSlice.ts`
// export const userApi = userSlice.injectEndpoints({
//   endpoints: (builder: { query: <T>(arg0: { query: () => string; providesTags: "User"[]; }) => T; mutation: <T>(arg0: { query: (userData: Partial<User>) => ({ url: string; method: string; body: Partial<User>; }) | ((credentials: LoginCredentials) => ({ url: string; method: string; body: LoginCredentials; })) | (() => ({ url: string; method: string; })); invalidatesTags?: "User"[]; }) => T; }) => ({
//     getUser: builder.query({
//       query: () => "/user/profile",
//       providesTags: ["User" as const], // Fix type issue
//     }),
//     updateUser: builder.mutation<Partial<User>>({
//       query: (userData) => ({
//         url: "/user/update",
//         method: "PUT",
//         body: userData,
//       }),
//       invalidatesTags: ["User" as const],
//     }),
//     loginUser: builder.mutation<LoginCredentials>({
//       query: (credentials) => ({
//         url: "/auth/login",
//         method: "POST",
//         body: credentials,
//       }),
//     }),
//     logoutUser: builder.mutation<void>({
//       query: () => ({
//         url: "/auth/logout",
//         method: "POST",
//         body: {}, // Add an empty body
//       }),
//     }),
//   }),
// });

// export const {
//   useGetUserQuery,
//   useUpdateUserMutation,
//   useLoginUserMutation,
//   useLogoutUserMutation,
// } = userApi;
// export { userSlice };

