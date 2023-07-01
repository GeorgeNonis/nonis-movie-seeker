import { createSlice } from "@reduxjs/toolkit";
import { DBInitialState } from "./interfaces";
import { localStorageMiddleware } from "./middlewares/updateLocal";

const initialState = {
  theme: false,
  queued: [],
  watched: [],
  movies: [],
  twentymovies: [],
} as DBInitialState;

const DATABASAE = createSlice({
  name: "DATABASE",
  initialState,
  reducers: {
    setInitialMovies(state, { payload }) {
      const { movies, twentymovies } = payload;
      state.movies = [...movies];
      state.twentymovies = [...twentymovies];
    },
    setDatabaseMovies(state, { payload }) {
      const { theme, watched, queued } = payload;
      (state.theme = theme), (state.watched = watched), (state.queued = queued);
      localStorageMiddleware({ ...state });
    },
    addMovieWatchList(state, { payload }) {
      const { ...movie } = payload;
      state.watched.push(movie);
      localStorageMiddleware({ ...state });
    },
    removeMovieWatchList(state, { payload }) {
      const { id } = payload;
      state.watched = [...state.watched.filter((movie) => movie._id !== id)];
      localStorageMiddleware({ ...state });
    },
    addMovieQueueList(state, { payload }) {
      const { ...movie } = payload;
      state.queued.push(movie);
      localStorageMiddleware({ ...state });
    },
    removeMovieQueueList(state, { payload }) {
      const { id } = payload;
      state.queued = [...state.queued.filter((movie) => movie._id !== id)];
      localStorageMiddleware({ ...state });
    },
    changeTheme(state) {
      state.theme = !state.theme;
      localStorageMiddleware({ ...state });
    },
  },
});

export const {
  setInitialMovies,
  setDatabaseMovies,
  addMovieWatchList,
  removeMovieWatchList,
  addMovieQueueList,
  removeMovieQueueList,
  changeTheme,
} = DATABASAE.actions;

export default DATABASAE.reducer;
