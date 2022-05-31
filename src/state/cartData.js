import { createSlice } from "@reduxjs/toolkit";

export const cartData = createSlice({
  name: "cartData",
  initialState: [],
  reducers: {
    add: (state, action) => [...state, action.payload],
    remove: (state, action) =>
      state.filter((value, index) => index !== action.payload),
  },
});

export const getItem = (test) => {
  return (dispatch) => {
    dispatch(cartData.actions.add(test));
  };
};

export const removeItem = (test) => {
  return (dispatch) => {
    dispatch(cartData.actions.remove(test));
  };
};
