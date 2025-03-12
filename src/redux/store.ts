import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import authReducer from './loginApi';
import { userPaymentsApi } from "../features/UserDash/UserPayments/userPaymentsApi"; // Import API


export const store = configureStore({
  reducer: {
    auth: authReducer,
    [userPaymentsApi.reducerPath]: userPaymentsApi.reducer, // Add the payments API reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(userPaymentsApi.middleware), // Add RTK Query middleware
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Custom hooks for typed useDispatch and useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;