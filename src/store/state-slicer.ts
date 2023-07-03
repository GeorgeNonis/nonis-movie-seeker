import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "./interfaces";

const initialState = {
  movieModal: false,
  settingsModal: false,
  libraryModal: false,
  watched: true,
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
    settingsModal(state) {
      console.log("clicking");
      state.settingsModal = !state.settingsModal;
    },
    addMovieDetails(state, { payload }) {
      const { ...rest } = payload;
      state.movie = rest;
      state.movieModal = !state.movieModal;
    },
    switchWatched(state) {
      state.watched = !state.watched;
    },
  },
});

export const {
  movieModal,
  addMovieDetails,
  libModal,
  switchWatched,
  settingsModal,
} = state.actions;

export default state.reducer;
