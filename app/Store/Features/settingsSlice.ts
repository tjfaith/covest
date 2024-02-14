// authSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SettingsState {
  activePage: String;
  showSideBar:Boolean
}


const initialState: SettingsState = {
  activePage: "",
  showSideBar:false,
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    updateActivePage: (state, action: PayloadAction<String>) => {
      state.activePage = action.payload;
    },
    toggleSideBar:(state, action: PayloadAction<Boolean>) => {
      state.showSideBar = action.payload;
    },
  },
});

export const { updateActivePage, toggleSideBar } = settingsSlice.actions;
export default settingsSlice.reducer;
