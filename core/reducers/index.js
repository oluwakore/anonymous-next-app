import { combineReducers } from "redux";
import {userReducer, userDetailsReducer, userProfileUpdateReducer} from "./userreducer/userreducer";
import { storyDetailsReducer, storyIdReducer } from "./storyReducer/storyReducer";

export default combineReducers({
  userLogin: userReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userProfileUpdateReducer,
  storyDetails: storyDetailsReducer,
  storyIden: storyIdReducer
});
