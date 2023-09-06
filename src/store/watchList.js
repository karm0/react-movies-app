import { createSlice } from "@reduxjs/toolkit";

const storedWatchList = JSON.parse(localStorage.getItem("watchList")) || [];
const storedWatched = JSON.parse(localStorage.getItem("watched")) || [];

const watchListSlice = createSlice({
  name: "watchList",
  initialState: { value: storedWatchList, value2: storedWatched },
  reducers: {
    addWatchList: (state, action) => {
      state.value.push(action.payload);
      localStorage.setItem("watchList", JSON.stringify(state.value));
    },
    addWatched: (state, action) => {
      state.value2.push(action.payload);
      localStorage.setItem("watched", JSON.stringify(state.value2));
    },
    removeWatchList: (state, action) => {
      const updatedList = state.value.filter((e) => e.imdbID !== action.payload);
      state.value = updatedList;
      localStorage.setItem("watchList", JSON.stringify(updatedList));
    },
    removeWatched: (state, action) => {
      const updatedList = state.value2.filter((e) => e.imdbID !== action.payload);
      state.value2 = updatedList;
      localStorage.setItem("watched", JSON.stringify(updatedList));
    },
  },
});
export default watchListSlice.reducer;
export const { addWatchList, addWatched, removeWatched, removeWatchList } =
  watchListSlice.actions;
