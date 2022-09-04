import {
  LOGIN_USER_REQUEST,
  LOGOUT_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
} from "../actiontypes";
import { login, getDetails } from "../../../api/base";
import { message } from "antd";
import axios from "axios";

/**
 * Logins the user
 * @param  payload object
 * @returns dispacth
 */
export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_USER_REQUEST });

    const res = await login({ email, password });

    const { data } = res;
    dispatch({ type: LOGIN_USER_SUCCESS, payload: data });

    // console.log(data);
    // console.log(res.headers['Authorization']);
    // console.log()
    // localStorage.setItem("userInfo", JSON.stringify(data.user))
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: message.error('Something went wrong.')
      // payload:
      //   error.response && error.response.data.message
      //     ? error.response.data.message
      //     : error.message,
    });
    console.error(error);
  }
};

export const logoutUser = () => (dispatch) => {
  dispatch({ type: LOGOUT_USER });
  // document.location.href = "/"
};

export const getUserDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_DETAILS_REQUEST });
    const {
      user: { userInfo },
    } = getState();

    const { data } = await getDetails(id, userInfo.token);
    dispatch({ type: USER_DETAILS_SUCCESS, payload: data });

    // localStorage.setItem("userInfo", JSON.stringify(data.user))
  } catch (error) {
    // const message =  error.response && error.response.data.message ? error.response.data.message : error.message
    dispatch({
      type: USER_DETAILS_FAIL,
      payload: message.error("Unable to fetch your details."),
    });
  }
};
