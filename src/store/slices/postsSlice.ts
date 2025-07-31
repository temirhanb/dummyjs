import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchUserThunk} from "../thunks/fetchUserThunk";
import {filterTodosThunk} from "../thunks/filterUserThunk";
import {StatusRequest} from "../../shared";

export interface IPosts {
  id: number;
  body: string;
  tags: Array<string>;
  title: string;
  reactions: { likes: number, dislikes: number };
  userId: number;
  views: number;
}

export interface IInitialState {
  posts: IPosts[];
  status: StatusRequest;
}

const initialState = {
  posts: [] as IPosts[],
  status: StatusRequest.LOADING
} as IInitialState;

export const postsSlices = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserThunk.pending, (state) => {
      state.status = StatusRequest.LOADING;
      state.todos = [];
    });
    builder.addCase(fetchUserThunk.rejected, (state) => {
      state.status = StatusRequest.ERROR;
      state.todos = [];
    });
    builder.addCase(fetchUserThunk.fulfilled, (state, action: PayloadAction<IUser[]>) => {
      state.status = StatusRequest.SUCCESS;
      state.todos = action.payload;
    });

    builder.addCase(filterTodosThunk.pending, (state) => {
      state.status = StatusRequest.LOADING;

    });
    builder.addCase(filterTodosThunk.rejected, (state) => {
      state.status = StatusRequest.ERROR;
    });
    builder.addCase(filterTodosThunk.fulfilled, (state, action) => {
      state.status = StatusRequest.SUCCESS;
      state.todos = action.payload;
    });
  },
});

export default postsSlices.reducer;