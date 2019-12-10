import { FETCH_POSTS } from "./types";
import { FETCH_USERS } from "./types";
import { FETCH_COMPANY } from "./types";
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

////---------------------------retriving User Profile-------------------------------////
export const fetchUser = (id: any) => (dispatch: any) => {
  console.log("Helooooooooooo");

  axios
    .get(`http://localhost:3004/user?id=${id}`)
    .then(users => {
      console.log(users);
      dispatch({
        type: FETCH_USERS,
        payload: users.data
      });
    })
    .catch(err => console.log(err));
};
////---------------------------retriving Company Profile-------------------------------////
export const fetchCompany = (id: any) => (dispatch: any) => {
  console.log("Hy");

  axios
    .get(`http://localhost:3004/user?id=${id}`)
    .then(company => {
      console.log(company.data.user);
      dispatch({
        type: FETCH_COMPANY,
        payload: company.data ////
      });
    })
    .catch(err => console.log(err));
};
