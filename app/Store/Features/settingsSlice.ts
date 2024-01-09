// authSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SettingsState {
  activePage: String;
}


const initialState: SettingsState = {
  activePage: "",
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    updateActivePage: (state, action: PayloadAction<String>) => {
      state.activePage = action.payload;
    },
  },
});

export const { updateActivePage } = settingsSlice.actions;
export default settingsSlice.reducer;
