// userBookingsApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Booking {
  id: number;
  userId: number;
  date: string;
  // add other fields as necessary
}

export const userBookingsApi = createApi({
  reducerPath: "userBookingsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api" }),
  endpoints: (builder) => ({
    getUserBookings: builder.query<Booking[], void>({
      query: () => "user-bookings",
    }),
  }),
});

export const { useGetUserBookingsQuery } = userBookingsApi;
