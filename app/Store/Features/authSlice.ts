"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: number;
  username: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  forgottenPassword:boolean;
  showResendLink:boolean;
  showAuth:boolean;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  forgottenPassword:false,
  showResendLink:false,
  showAuth:false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
    updateUser: (state, action: PayloadAction<Partial<User>>) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }
    },
    setForgottenPassword: (state, action: PayloadAction<boolean>) => {
      state.forgottenPassword = action.payload;
    },
    updateShowResendLink:(state, action:PayloadAction <boolean>)=>{
      state.showResendLink = action.payload
    },
    toggleAuth:(state, action:PayloadAction <boolean>)=>{
      state.showAuth = action.payload
    },
  },
});

export const { login, logout, updateUser,updateShowResendLink, setForgottenPassword, toggleAuth } = authSlice.actions;
export default authSlice.reducer;
