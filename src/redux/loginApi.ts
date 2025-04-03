import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../components/utils/axiosInstance';

// Define types
export interface User {
  id?: string;
  email: string;
  role: 'admin' | 'patient' | 'therapist';
}

export interface LoginState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
  isAuthenticated: boolean;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

// Async thunk for login
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials: LoginCredentials, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/login', credentials);
      const { token, user } = response.data;

      // Store token and user info in localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('userRole', user.role);

      return { token, user };
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : 'Login failed';
      return rejectWithValue(errorMessage);
    }
  }
);

// Logout action
export const logoutUser = createAsyncThunk('auth/logoutUser', async (_, { dispatch }) => {
  // Clear localStorage
  localStorage.removeItem('token');
  localStorage.removeItem('userRole');

  // Reset state
  dispatch(authSlice.actions.resetState());
});

// Initial state
const initialState: LoginState = {
  user: null,
  token: localStorage.getItem('token'),
  isLoading: false,
  error: null,
  isAuthenticated: !!localStorage.getItem('token'),
};

// Auth slice
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetState: (state) => {
      state.user = null;
      state.token = null;
      state.isLoading = false;
      state.error = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
        state.isAuthenticated = false;
      });
  },
});

export const { resetState } = authSlice.actions;

export default authSlice.reducer;