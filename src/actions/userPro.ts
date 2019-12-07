import axios from "axios";
import { FETCH_USERS, NEW_USER } from "./types";

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
