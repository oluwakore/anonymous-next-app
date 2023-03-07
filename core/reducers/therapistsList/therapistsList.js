import {
  THERAPISTS_LIST_REQUEST,
  THERAPISTS_LIST_SUCCESS,
  THERAPISTS_LIST_FAIL,
  THERAPISTS_BOOKING_REQUEST,
  THERAPISTS_BOOKING_SAVE_THERAPIST_ID,
  THERAPISTS_BOOKING_SAVE_PLAN_ID,
  THERAPISTS_BOOKING_SAVE_RESERVATION_ID,
  THERAPISTS_BOOKING_SAVE_REFERENCE_ID,
  THERAPISTS_BOOKING_SAVE_SESSION_METADATA,
} from "../../actions/actiontypes";

const initialState = {};

// reducer for therapist list requests
export const therapistsListReducer = (state = initialState, action) => {
  switch (action.type) {
    case THERAPISTS_LIST_REQUEST:
      return { loading: true };
    case THERAPISTS_LIST_SUCCESS:
      return { loading: false, therapArray: action.payload };
    case THERAPISTS_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// reducer for therapist booking requests
export const therapistBookingIdReducer = (
  state = {
    therapistId: null,
    planId: null,
    reservationId: null,
    referenceId: null,
    sessionData: null,
    loading: false,
  },
  action
) => {
  switch (action.type) {
    case THERAPISTS_BOOKING_REQUEST:
      return { ...state, loading: true };
    case THERAPISTS_BOOKING_SAVE_THERAPIST_ID:
      return { ...state, therapistId: action.payload, loading: false };
    case THERAPISTS_BOOKING_SAVE_PLAN_ID:
      return { ...state, planId: action.payload, loading: false };
    case THERAPISTS_BOOKING_SAVE_RESERVATION_ID:
      return { ...state, reservationId: action.payload, loading: false };
    case THERAPISTS_BOOKING_SAVE_REFERENCE_ID:
      return { ...state, referenceId: action.payload, loading: false };
    case THERAPISTS_BOOKING_SAVE_SESSION_METADATA:
      return { ...state, sessionData: action.payload, loading: false };
    default:
      return state;
  }
};
