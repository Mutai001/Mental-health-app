import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Payment {
  id: string;
  amount: number;
  status: string;
  date: string;
}

export interface PaymentRequest {
  amount: number;
  method: "mpesa" | "stripe";
}

export const userPaymentsApi = createApi({
  reducerPath: "userPaymentsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api" }),
  endpoints: (builder) => ({
    getUserPayments: builder.query<Payment[], void>({
      query: () => "/mpesa/transactions",
    }),
    makePayment: builder.mutation<{ message: string }, PaymentRequest>({
      query: (paymentData) => ({
        url: "/mpesa/initiate",
        method: "POST",
        body: paymentData,
      }),
    }),
  }),
});

export const { useGetUserPaymentsQuery, useMakePaymentMutation } = userPaymentsApi;
