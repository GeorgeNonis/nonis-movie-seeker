import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "./interfaces";

const initialState = {
  theme: false,
} as InitialState;

const state = createSlice({
  name: "state",
  initialState,
  reducers: {
    changeTheme(state) {
      state.theme = !state.theme;
    },
  },
});

export const { changeTheme } = state.actions;

export default state.reducer;
