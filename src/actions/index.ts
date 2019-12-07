import { FETCH_POSTS } from "./types";
import { FETCH_USERS } from "./types";
import axios from "axios";

export const fetchPost = () => (dispatch: any) => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(posts => {
      // console.log(posts);
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      });
    });
};

export const fetchUser = (id: any) => (dispatch: any) => {
  console.log("Helooooooooooo");

  axios
    .get(`http://localhost:3004/userProfile?id=${id}`)
    // .then(res => res.json())
    .then(users => {
      console.log("Helooooooooooo");

      console.log(users);
      dispatch({
        type: FETCH_USERS,
        payload: users
      });
    })
    .catch(err => console.log(err));
};
