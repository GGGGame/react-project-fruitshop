import { configureStore } from "@reduxjs/toolkit";
import { fetchState } from "./fetchData";
import { combineReducers } from "redux";
import { cartData } from "./cartData";

const root = combineReducers({
  fetchFruit: fetchState.reducer,
  cartFruit: cartData.reducer,
});

export const store = configureStore({
  reducer: root,
});
