import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./registerApi";
import { loginApi } from "./loginApi";
import { userBookingsApi } from "../features/UserDash/UserBookings/userBookingsApi";
import { userPaymentsApi } from "../features/UserDash/UserPayments/userPaymentsApi";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [loginApi.reducerPath]: loginApi.reducer,
    [userBookingsApi.reducerPath]: userBookingsApi.reducer,
    [userPaymentsApi.reducerPath]: userPaymentsApi.reducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userApi.middleware,
      loginApi.middleware,
      userBookingsApi.middleware,
      userPaymentsApi.middleware

    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
