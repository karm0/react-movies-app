import { configureStore } from "@reduxjs/toolkit";
import watchListSlice from "./watchList";

const store = configureStore({
  reducer: { watchList: watchListSlice },
});

export default store;
