// authSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import {
  registerUser,
  loginUser,
  logoutUser,
  fetchCurrentUser,
} from './operations';

interface AuthState {
  user: any | null;
  loading: boolean;
  error: boolean;
  login: boolean;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: false,
  login: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetUserInfo: (state) => {
      state.user = null;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Register user
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = {
          uid: action.payload.uid,
          email: action.payload.email,
          displayName: action.payload.displayName,
        };
        state.loading = false;
        state.login = true;
      })
      .addCase(registerUser.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })

      // Login user
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        console.log(action);

        state.user = {
          uid: action.payload.uid,
          email: action.payload.email,
          displayName: action.payload.displayName,
        };
        state.loading = false;
        state.login = true;
      })
      .addCase(loginUser.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })

      // Fetch current user
      .addCase(fetchCurrentUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
        state.login = true;
      })
      .addCase(fetchCurrentUser.rejected, (state) => {
        state.error = false;
        state.loading = false;
      })

      // Logout user
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.user = null;
        state.loading = false;
        state.login = false;
      });
  },
});

export const { resetUserInfo } = authSlice.actions;
export const authReducer = authSlice.reducer;
