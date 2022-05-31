import { createSlice } from "@reduxjs/toolkit";

export const cartData = createSlice({
  name: "cartData",
  initialState: [],
  reducers: {
    add: (state, action) => [...state, action.payload],
    edit: (state, action) => {
      state.map((value, index) => {
        if (index !== action.payload.id) {
          return {
            ...action.payload,
            value,
          };
        }
      });
    },
  },
});

export const getItem = (test) => {
  return (dispatch) => {
    dispatch(cartData.actions.add(test));
  };
};
