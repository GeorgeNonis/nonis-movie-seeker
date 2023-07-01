import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "./interfaces";

const initialState = {
  movieModal: false,
  libraryModal: false,
  movie: {},
} as InitialState;

const state = createSlice({
  name: "state",
  initialState,
  reducers: {
    movieModal(state) {
      state.movieModal = !state.movieModal;
    },
    libModal(state) {
      state.libraryModal = !state.libraryModal;
    },
    addMovieDetails(state, { payload }) {
      const { ...rest } = payload;
      state.movie = rest;
      state.movieModal = !state.movieModal;
    },
  },
});

export const { movieModal, addMovieDetails, libModal } = state.actions;

export default state.reducer;
