import {
  LOGIN_USER_REQUEST,
  LOGOUT_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  USER_DETAILS_RESET,
  USER_PROFILE_UPDATE_REQUEST,
  USER_PROFILE_UPDATE_SUCCESS,
  USER_PROFILE_UPDATE_FAIL,
  STORE_USER_APPOINTMENT_DATES,
} from "../actiontypes";
import { login, getDetails, updateProfile } from "../../../api/base";
import { message } from "antd";
import axios from "axios";

/**
 * action to login user
 * @param  payload object
 * @returns dispatch
 */
export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_USER_REQUEST });

    const res = await login({ email, password });

    const { data } = res;
    dispatch({ type: LOGIN_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: message.error(
        `${
          error?.response?.data?.msg === undefined
            ? "Something went wrong"
            : error?.response?.data?.msg
        }`
      ),
      // payload:
      //   error.response && error.response.data.msg
      //     ? error.response.data.msg
      //     : error.msg,
    });
    // console.error(error);
  }
};

// action to logout user
export const logoutUser = () => (dispatch) => {
  dispatch({ type: LOGOUT_USER });
  dispatch({ type: USER_DETAILS_RESET });

  // document.location.href = "/"
};

// action to get user details
export const getUserDetails = (id, token) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_DETAILS_REQUEST });
    // const {
    //   user: { userInfo },
    // } = getState();

    const res = await getDetails(id, token);
    const { data } = res;

    dispatch({ type: USER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    const message = `${
      error?.response?.data?.msg === undefined
        ? "Something went wrong"
        : error?.response?.data?.msg
    }`;
    dispatch({
      type: USER_DETAILS_FAIL,
      payload: message,
      // payload: message.error(`${error?.response?.data?.msg === undefined ? 'Something went wrong' :  error?.response?.data?.msg }`),
    });
  }
};

// action to get update user details
export const updateUserProfile =
  (id, details, token) => async (dispatch, getState) => {
    try {
      dispatch({ type: USER_PROFILE_UPDATE_REQUEST });

      // const {
      //   userLogin: { userInfo }
      // } = getState()

      const res = await updateProfile(id, details, token);

      const { data } = res;
      dispatch({ type: USER_PROFILE_UPDATE_SUCCESS, payload: data });
      // dispatch({ type: USER_DETAILS_SUCCESS, payload: data})

      // console.log(data)
    } catch (error) {
      dispatch({
        type: USER_PROFILE_UPDATE_FAIL,
        payload: message.error(
          `${
            error?.response?.data?.msg === undefined
              ? "Something went wrong"
              : error?.response?.data?.msg
          }`
        ),
      });

      // console.log(error)
    }
  };

// action to store user appointments
export const storeApptDatesArray = (details) => (dispatch) => {
  dispatch({ type: STORE_USER_APPOINTMENT_DATES, payload: details });
};
