import { FETCH_POSTS } from "./types";
import axios from "axios";

export const fetchPost = () => (dispatch: any) => {
  axios.get(`http://localhost:3004/articles`).then(posts => {
    // console.log(posts);
    dispatch({
      type: FETCH_POSTS,
      payload: posts.data
    });
  });
};
