import { createSlice } from "@reduxjs/toolkit";

export const fetchState = createSlice({
  name: "fetchdata",
  initialState: [],
  reducers: {
    get: (state, action) => [...state, action.payload],
    edit: (state, action) => [action.payload],
    reset: (state, action) => [],
  },
});

export const fetchData = (url, name) => {
  return async (dispatch) => {
    const response = await fetch(url);
    const json = await response.json();

    if (name === "" || name === undefined) {
      dispatch(fetchState.actions.get(json.fruits));
    } else {
      dispatch(
        fetchState.actions.edit(
          json.fruits.filter((value) => value.name === name)
        )
      );
    }
  };
};

export const resetData = () => {
  return (dispatch) => dispatch(fetchState.actions.reset());
};
