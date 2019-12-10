import postReducer from "./postReducer";
import userPro from "./userPro";
import companyProfile from "./companyProfile";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  posts: postReducer,
  users: userPro,
  company: companyProfile
});

export default rootReducer;
