import { combineReducers } from "redux";
import {userReducer, userDetailsReducer, userProfileUpdateReducer, storeApptDetailsReducer} from "./userreducer/userreducer";
import { storyDetailsReducer, storyIdReducer } from "./storyReducer/storyReducer";
import { therapistsListReducer, therapistBookingIdReducer } from "./therapistsList/therapistsList";

export default combineReducers({
  userLogin: userReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userProfileUpdateReducer,
  storyDetails: storyDetailsReducer,
  storyIden: storyIdReducer,
  therapistList: therapistsListReducer,
  therapistBooking: therapistBookingIdReducer,
  storeApptDetails: storeApptDetailsReducer
});
