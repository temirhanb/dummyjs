import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {fetchPostsThunk} from "../thunks/fetchPostsThunk";
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

export interface IRequestPosts {
  limit: number
  posts: IPosts[],
  skip: number,
  total: number
}

export interface IInitialState {
  posts: IPosts[];
  status: string;
  skipCount: number;
  totalPosts: number;
}

const initialState = {
  posts: [] as IPosts[],
  status: StatusRequest.LOADING,
  skipCount: 0,
  totalPosts: 0
} as IInitialState;

export const postsSlices = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPostsThunk.pending, (state) => {
      state.status = StatusRequest.LOADING;
    });
    builder.addCase(fetchPostsThunk.rejected, (state) => {
      state.status = StatusRequest.ERROR;
    });
    builder.addCase(fetchPostsThunk.fulfilled, (state, action: PayloadAction<IRequestPosts>) => {
      state.status = StatusRequest.SUCCESS;
      state.totalPosts = action.payload.total;
      state.skipCount = action.payload.skip;
      state.posts.push(...action.payload.posts);
    });
  },
});

export default postsSlices.reducer;