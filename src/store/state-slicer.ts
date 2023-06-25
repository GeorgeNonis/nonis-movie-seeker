import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "./interfaces";

const initialState = {
  test: "Giorgos",
} as InitialState;

const state = createSlice({
  name: "state",
  initialState,
  reducers: {},
});

export const {} = state.actions;

export default state.reducer;
