import {
  LOGIN_USER_REQUEST,
  LOGOUT_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_FAIL,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  USER_DETAILS_RESET,
  USER_DETAILS_REQUEST,
  USER_PROFILE_UPDATE_FAIL,
  USER_PROFILE_UPDATE_SUCCESS,
  USER_PROFILE_UPDATE_REQUEST,
  STORE_USER_APPOINTMENT_DATES,
} from "../../actions/actiontypes";

const initialState = {
  // loading: false,
  // success: false,
  // token: null,
  // user: null,
  // exp: null,
  // refreshToken: null
};

// reducer for login requests
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return { loading: true };
    case LOGIN_USER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case LOGOUT_USER:
      return {};
    default:
      return state;
  }
};

// reducer for user details requests
export const userDetailsReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return { ...state, loading: true };
    case USER_DETAILS_SUCCESS:
      return { loading: false, user: action.payload };
    case USER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    case USER_DETAILS_RESET:
      return { user: {} };
    default:
      return state;
  }
};

// reducer for user profile update
export const userProfileUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_PROFILE_UPDATE_REQUEST:
      return { loading: true };
    case USER_PROFILE_UPDATE_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload };
    case USER_PROFILE_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// reducer for storing appointment details
export const storeApptDetailsReducer = (state = { appt: null }, action) => {
  switch (action.type) {
    case STORE_USER_APPOINTMENT_DATES:
      return { ...state, appt: action.payload };
    default:
      return state;
  }
};

// ...state,
// success: action.payload.success,
// token: action.payload.token,
// user: action.payload.user,
// exp: action.payload.exp,
// refreshToken: action.payload.refreshToken
