import {
  STORY_DETAIL_SUCCESS,
  STORY_DETAIL_FAIL,
  STORY_DETAIL_REQUEST,
  SAVE_STORY_ID,
  STORY_STORY_REQUEST,
} from "../../actions/actiontypes";

// reducer for story detail requests
export const storyDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case STORY_DETAIL_REQUEST:
      return { loading: true };
    case STORY_DETAIL_SUCCESS:
      return { loading: false, success: true, storyInfo: action.payload };
    case STORY_DETAIL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// reducer for storing story id
export const storyIdReducer = (
  state = { id: null, loading: false },
  action
) => {
  switch (action.type) {
    case STORY_STORY_REQUEST:
      return { ...state, loading: true };
    case SAVE_STORY_ID:
      return { ...state, id: action.payload, loading: false };
    default:
      return state;
  }
};
