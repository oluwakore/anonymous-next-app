import { combineReducers } from "redux";
import {userReducer, userDetailsReducer, userProfileUpdateReducer} from "./userreducer/userreducer";

export default combineReducers({
  userLogin: userReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userProfileUpdateReducer
});
