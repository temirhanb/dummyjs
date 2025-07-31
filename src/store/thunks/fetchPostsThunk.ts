import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_URL} from "../../shared";
import {type  IRequestPosts} from "../slices/postsSlice";

export const fetchPostsThunk = createAsyncThunk("posts/fetch", async (skipsPost) => {
  const {data} = await axios.get<IRequestPosts>(API_URL + `posts?limit=10&skip=${skipsPost}`);
  return data;
});