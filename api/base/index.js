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
  return http.post('/auth/login/', data)
}

export const getDetails = (id, token) => {
  return http.get(`/patients/me?=${id}`, setAuthToken(token))
}

export const updateProfile = (id, data, token) => {
  return http.patch(`/patients/me?=${id}`, data ,setAuthToken(token))
}


export const updatePasword = (id, data, token) => {
  return http.patch(`/patients/update-password?=${id}`, data,setAuthToken(token))
}

export const shareStory = (id, data, token) => {
  return http.post(`/patients/stories?=${id}`, data, setAuthToken(token))
}


// export const myStory = (id, token) => {
//   return http.get(`/patients/stories?=${id}`,setAuthToken(token))
// }



export const allStoriesFuncs = (pageNo, limit) => {
  return http.get(`/stories?page=${pageNo}&limit=${limit}`)
}

export const allStoriesCategoriesFuncs = (pageNo, limit, tag) => {
  return http.get(`/stories?page=${pageNo}&limit=${limit}&tags=${tag}`)
}

export const  allStoriesCatLen = (tag) => {
  return http.get(`/stories?tags=${tag}`)
}

export const  allStoriesLen = () => {
  return http.get(`/stories`)
}


export const getStory = (id) => {
  return http.get(`/stories/${id}`)
}

export const getStoryComments = (id) => {
  return http.get(`/stories/${id}/comments`)
}

export const postComments = (id, data, token) => {
  return http.post(`/stories/${id}/comments`, data, setAuthToken(token))
}

export const likeComments = (id, data, token) => {
  return http.post(`/comments/${id}/like`, data, setAuthToken(token))
}

export const unlikeComments = (id, data, token) => {
  return http.delete(`/comments/${id}/like`, data, setAuthToken(token))
}









