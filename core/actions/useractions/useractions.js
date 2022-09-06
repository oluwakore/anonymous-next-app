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
  USER_PROFILE_UPDATE_FAIL
} from "../actiontypes";
import { login, getDetails, updateProfile } from "../../../api/base";
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
      payload: message.error(`${error?.response?.data?.msg === undefined ? 'Something went wrong' :  error?.response?.data?.msg }`)
      // payload:
      //   error.response && error.response.data.msg
      //     ? error.response.data.msg
      //     : error.msg,
    });
    // console.error(error);
  }
};

export const logoutUser = () => (dispatch) => {
  dispatch({ type: LOGOUT_USER });
  dispatch({ type: USER_DETAILS_RESET})

  // document.location.href = "/"
};

export const getUserDetails = (id, token) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_DETAILS_REQUEST });
    // const {
    //   user: { userInfo },
    // } = getState();

    const res = await getDetails(id, token)
    const {data} = res


    dispatch({ type: USER_DETAILS_SUCCESS, payload: data });
    // console.log(data)
    // localStorage.setItem("userInfo", JSON.stringify(data.user))
  } catch (error) {
    const message = `${error?.response?.data?.msg === undefined ? 'Something went wrong' :  error?.response?.data?.msg}`
    dispatch({
      type: USER_DETAILS_FAIL,
      payload: message
      // payload: message.error(`${error?.response?.data?.msg === undefined ? 'Something went wrong' :  error?.response?.data?.msg }`),
    });
  }
};

export const updateUserProfile = (id, details, token) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_PROFILE_UPDATE_REQUEST })

    // const {
    //   userLogin: { userInfo }
    // } = getState()

    const res = await updateProfile(id, details, token)

    const {data} = res
    dispatch({ type: USER_PROFILE_UPDATE_SUCCESS, payload: data })
    // dispatch({ type: USER_DETAILS_SUCCESS, payload: data})
    
    // console.log(data)


  } catch(error) {

    dispatch({
      type: USER_PROFILE_UPDATE_FAIL,
      payload: message.error(`${error?.response?.data?.msg === undefined ? 'Something went wrong' :  error?.response?.data?.msg }`),
    });

    // console.log(error)
  }
}
