import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "./interfaces";

const initialState = {
  theme: false,
  movieModal: false,
  movie: {},
} as InitialState;

const state = createSlice({
  name: "state",
  initialState,
  reducers: {
    changeTheme(state) {
      state.theme = !state.theme;
    },
    movieModal(state) {
      state.movieModal = !state.movieModal;
    },
    addMovieDetails(state, { payload }) {
      const { ...rest } = payload;
      state.movie = rest;
      state.movieModal = !state.movieModal;
    },
  },
});

export const { changeTheme, movieModal, addMovieDetails } = state.actions;

export default state.reducer;
