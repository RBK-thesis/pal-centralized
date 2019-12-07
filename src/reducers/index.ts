import postReducer from "./postReducer";
import userPro from "./userPro";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  posts: postReducer,
  users: userPro
});

export default rootReducer;
