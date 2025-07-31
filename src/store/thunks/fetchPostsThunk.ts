import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_URL} from "../../shared";
import {type IPosts} from "../slices/postsSlice";

export const fetchPostsThunk = createAsyncThunk("posts/fetch", async (skipsPost:number) => {
  const {data} = await axios.get<IPosts[]>(API_URL + `posts?limit=10&skip=${skipsPost}`);
  return data;
});