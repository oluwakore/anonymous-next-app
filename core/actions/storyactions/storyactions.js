import { STORY_DETAIL_REQUEST, STORY_DETAIL_SUCCESS, STORY_DETAIL_FAIL, SAVE_STORY_ID, STORY_STORY_REQUEST } from "../actiontypes";
import { getStory } from "../../../api/base";
import { message } from "antd";



/**
 * gets the story details
 * @param  payload object
 * @returns dispatch
 */

export const getStoryDetails = (id) => async(dispatch) => {
  try{

    dispatch({ type: STORY_DETAIL_REQUEST})

      const res = await getStory(id)

      const {data} = res

      dispatch({ type: STORY_DETAIL_SUCCESS, payload: data })

  } catch(err){
      dispatch({
        type: STORY_DETAIL_FAIL,
        payload: message.error('Unable to retrieve story')
      })
  }
}


export const saveStoryId = (id) => (dispatch) => {
  
  dispatch({ type: STORY_STORY_REQUEST })

  dispatch({ type: SAVE_STORY_ID, payload: id})
}
