import { configureStore } from "@reduxjs/toolkit";
import secondsReducer from "./secondsSlice";

export const store = configureStore({
  reducer: {
    seconds: secondsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
