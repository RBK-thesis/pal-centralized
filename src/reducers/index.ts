import postReducer from "./postReducer";
import loginReducer from "./loginReducer";
import logoutReducer from "./logoutReducer";
import isLoggedReducer from "./isLogged";
import searchReducer from "./searchReducer";
import signupReducer from "./signupReducer";
import favoriteReducer from "./favoriteReducer";
import fetchCompanyPostsReducer from "./fetchCompanyPostsReducer";
import userProile from "./userProfileReducer";
import companyProfile from "./companyProfileReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  user: loginReducer,
  posts: postReducer,
  logout: logoutReducer,
  isLogged: isLoggedReducer,
  search: searchReducer,
  signup: signupReducer,
  favoritePosts: favoriteReducer,
  companyPosts: fetchCompanyPostsReducer,
  userProfile: userProile,
  companyProfile: companyProfile
});

export default rootReducer;
