import {configureStore} from "@reduxjs/toolkit";
import {postsSlices} from "./slices/postsSlice";

export const store = configureStore({
  reducer: {
    posts: postsSlices,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch