'use client';
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Features/authSlice";
import settingsSlice from "./Features/settingsSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    settings: settingsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;