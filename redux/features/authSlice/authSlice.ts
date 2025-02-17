// src/slices/authSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the types for user and token
interface User {
  userEmail: string;
  userId: string;
  userRole: "ADMIN" | "USER";
}

interface AuthState {
  user: User | null;
  token: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
};

// Define the slice with reducers and actions
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ user: User; token: string }>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

//Export the actions
export const { login, logout } = authSlice.actions;

//Export the reducer
export default authSlice.reducer;
