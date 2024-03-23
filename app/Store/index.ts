'use client';
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Features/authSlice";
import settingsSlice from "./Features/settingsSlice";
import propertySlice from "./Features/propertySlice";
import userSlice from "./Features/userSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    property:propertySlice,
    settings: settingsSlice,
    user: userSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;