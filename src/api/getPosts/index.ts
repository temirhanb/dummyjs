import axios from "axios";
import {API_URL} from "../../shared/api";

export const getPosts = async () => {
  const data = await axios.get(API_URL + "posts?limit=10&skip=0");
  console.log(data);
  return data;
};