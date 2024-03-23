"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface UserState {
  loggedInUser: Record<string, string | number |boolean>;
}

const initialState: UserState = {
    loggedInUser:{},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateLoggedInUser: (state, action: PayloadAction<Record<string, string | number | boolean>>) => {
      state.loggedInUser = action.payload;
    },
  
  },
});

export const { updateLoggedInUser } = userSlice.actions;
export default userSlice.reducer;
