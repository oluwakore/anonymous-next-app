import axios from "axios";
import { REACT_APP_BASE_URL } from "../env";

/**
 * Axios instance without auth
 */

export const http = axios.create({
  baseURL: REACT_APP_BASE_URL,
  headers: {
    "Content-type": "application/json",
    // "Access-Control-Allow-Origin": "*"
  },
});

/**
 * Set token headers
 * @param  token string
 */

export const setAuthToken = (token) => {
  if (token != null) {
    http.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete http.defaults.headers.common["Authorization"];
  }
};
