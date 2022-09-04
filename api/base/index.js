import { http, setAuthToken } from '../index'



// done
/**
 * User signup
 * @param  data Object
 * @returns axios http response
 */

export const register = (data) => {
  return http.post('/auth/register', data)
}

export const login = (data) => {
  return http.post('/auth/login', data)
}

export const getDetails = (id, token) => {
  return http.get(`/patients/me?=${id}`, setAuthToken(token))
}