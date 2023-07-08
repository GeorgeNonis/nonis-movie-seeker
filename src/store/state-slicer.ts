import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "./interfaces";

const initialState = {
  movieModal: false,
  settingsModal: false,
  libraryModal: false,
  watched: true,
  movie: {
    _id: "",
    id: "",
    __v: 0,
    description: "",
    director: [],
    genre: [],
    image: [],
    imdbid: "",
    rank: 0,
    rating: "",
    thumbnail: "",
    title: "",
    writers: [""],
    year: 0,
  },
  resultMovies: [],
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
    searchResult(state, { payload }) {
      const { movies } = payload;
      state.resultMovies = [...movies];
    },
  },
});

export const {
  movieModal,
  addMovieDetails,
  libModal,
  switchWatched,
  settingsModal,
  searchResult,
} = state.actions;

export default state.reducer;
