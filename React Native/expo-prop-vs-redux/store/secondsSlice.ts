import { createSlice } from "@reduxjs/toolkit";

const secondsSlice = createSlice({
  name: "seconds",
  initialState: 0,
  reducers: {
    increment: (state) => {
      console.log("Current state:", state + 1);
      return state + 1;
    },
  },
});

export const { increment } = secondsSlice.actions;
export default secondsSlice.reducer;
