import { configureStore } from "@reduxjs/toolkit";
import { loginApi } from "./loginApi"; // Fixed import path
import { userApi } from "./registerApi";
import { userBookingsApi } from "../features/UserDash/UserBookings/userBookingsApi";
import { userPaymentsApi } from "../features/UserDash/UserPayments/userPaymentsApi";

export const store = configureStore({
  reducer: {
    [loginApi.reducerPath]: loginApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [userBookingsApi.reducerPath]: userBookingsApi.reducer,
    [userPaymentsApi.reducerPath]: userPaymentsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      loginApi.middleware,
      userApi.middleware,
      userBookingsApi.middleware,
      userPaymentsApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
