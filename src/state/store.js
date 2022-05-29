import { configureStore } from "@reduxjs/toolkit";
import { fetchState } from "./fetchData";
import { combineReducers } from "redux";

const root = combineReducers({
  fetchFruit: fetchState.reducer,
});

export const store = configureStore({
  reducer: root,
});
