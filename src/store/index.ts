import { combineReducers, configureStore } from "@reduxjs/toolkit";
import state from "./state-slicer";

const store = configureStore({
  reducer: {
    state,
  },
});

const storeType = () => {
  return store;
};

const rootReducer = combineReducers({ state });
export type IRootState = ReturnType<typeof rootReducer>;

export default store;
