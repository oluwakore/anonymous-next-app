import { combineReducers } from "redux";
import {userReducer, userDetailsReducer} from "./userreducer/userreducer";

export default combineReducers({
  userLogin: userReducer,
  userDetails: userDetailsReducer,
});
