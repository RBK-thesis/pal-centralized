import {
  FETCH_POSTS,
  SIGN_IN,
  LOGOUT_SUCCESS,
  IS_LOGGED,
  SEARCH_START,
  SIGN_UP,
  FETCH_FAVORITE,
  FETCH_COMPANY_POSTS,
  FETCH_COMPANY,
  FETCH_USERS,
  CHANGE_FAV_STATUS
} from "./types";
import axios from "axios";

// FETCH THE POSTS
export const fetchPost = () => (dispatch: any) => {
  axios.get(`http://localhost:3004/articles`).then(posts => {
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

//LOGIN USER REQUEST
export const login = (userInfo: any, callback: any) => (dispatch: any) => {
  axios
    .post("http://127.0.0.1:3004/user/signIn", {
      email: userInfo.email.email,
      passowrd: userInfo.password.password
    })
    .then(userToken => {
      console.log("this the user data from login action", userToken);
      dispatch({
        type: SIGN_IN,
        payload: userToken.data
      });
      callback(userToken.data);
    })
    .catch(err => console.log(err));
};

//SIGNUP USER REQUEST
export const signup = (userInfo: any, callback: any) => (dispatch: any) => {
  axios
    .post("http://127.0.0.1:3004/user/signUp", {
      name: userInfo.userName.userName,
      type: userInfo.type,
      email: userInfo.email.email,
      passowrd: userInfo.password.password
    })
    .then(response => {
      console.log("inside then sign up action and the res : ", response);
      dispatch({
        type: SIGN_UP,
        payload: response.data
      });
      callback(response.data);
    })
    .catch(err => console.log(err));
};

//LOGOUT USER
export const logout = () => {
  return {
    type: LOGOUT_SUCCESS
  };
};

// TO CHECK ID THE USER LOGIN OR NOT
export const isLogged = () => {
  return {
    type: IS_LOGGED
  };
};

// To get the search result
export const search = (searchInfo: any) => (dispatch: any) => {
  var url = [];
  if (searchInfo.major !== "") {
    url.push("major=" + searchInfo.major);
  }
  if (searchInfo.type !== "") {
    url.push("type=" + searchInfo.type);
  }
  if (searchInfo.enterQuery !== "") {
    url.push("enterQuery=" + searchInfo.enterQuery);
  }
  var URLl = "";
  for (var i = 0; i < url.length; i++) {
    if (i === 0) {
      URLl = "/?" + url[i];
    } else {
      URLl += "&&" + url[i];
    }
  }
  console.log(URLl);
  axios
    .get(`http://127.0.0.1:3004/articles/search${URLl}`)
    .then(searchResult => {
      console.log("inside then search action");
      console.log(searchResult);
      dispatch({
        type: SEARCH_START,
        payload: searchResult.data
      });
    })
    .catch(err => console.log("inside catch search", err));
};

// Get the favorite list for the user
export const fetchFavorite = () => (dispatch: any) => {
  console.log("ID user from local storage", localStorage.getItem("userId"));
  const userId = localStorage.getItem("userId");
  axios
    .get(`http://localhost:3004/articles/favoriteList?id=${userId}`)
    .then(favPosts => {
      // console.log("inside then fav action", Favposts.data);
      dispatch({
        type: FETCH_FAVORITE,
        payload: favPosts.data
      });
    })
    .catch(err => {
      console.log("inside err favorite", err);
    });
};

//------------------------------------------ Fetch company posts ---------------------------------------------//

export const fetchCompanyPosts = () => (dispatch: any) => {
  console.log("ID user from local storage", localStorage.getItem("userId"));
  const userId = localStorage.getItem("userId");
  axios
    .get(`http://localhost:3004/articles/?id=${userId}`)
    .then(favPosts => {
      // console.log("inside then fav action", Favposts.data);
      dispatch({
        type: FETCH_FAVORITE,
        payload: favPosts.data
      });
    })
    .catch(err => {
      console.log("inside err favorite", err);
    });
};
