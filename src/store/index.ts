import { combineReducers, configureStore } from "@reduxjs/toolkit";
import state from "./state-slicer";
import DATABASE from "./db-slice";

const store = configureStore({
  reducer: {
    state,
    DATABASE,
  },
});

const rootReducer = combineReducers({ state, DATABASE });
export type IRootState = ReturnType<typeof rootReducer>;

export default store;
