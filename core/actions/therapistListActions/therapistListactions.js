import {
  THERAPISTS_LIST_REQUEST,
  THERAPISTS_LIST_SUCCESS,
  THERAPISTS_LIST_FAIL,
  THERAPISTS_BOOKING_REQUEST,
  THERAPISTS_BOOKING_SAVE_THERAPIST_ID,
  THERAPISTS_BOOKING_SAVE_PLAN_ID,
  THERAPISTS_BOOKING_SAVE_RESERVATION_ID,
  THERAPISTS_BOOKING_SAVE_REFERENCE_ID,
  THERAPISTS_BOOKING_SAVE_SESSION_METADATA
} from "../actiontypes";
import { getPotentialTherapist } from "../../../api/base";
import { message } from "antd";

export const getTherapList = (data, token) => async (dispatch) => {
  try {
    dispatch({ type: THERAPISTS_LIST_REQUEST });

    const res = await getPotentialTherapist(data, token);

    // const {data} = res
    // console.log(res.data)

    dispatch({ type: THERAPISTS_LIST_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({
      type: THERAPISTS_LIST_FAIL,
      // payload: error
      payload: message.error(
        `${
          error?.response?.data?.msg === undefined
            ? "Something went wrong"
            : error?.response?.data?.msg
        }`
      ),
    });
  }
};


export const saveTherapistID = (iden) => (dispatch) => {
  dispatch({ type: THERAPISTS_BOOKING_REQUEST })

  dispatch({ type: THERAPISTS_BOOKING_SAVE_THERAPIST_ID, payload: iden })
}


export const savePlanID = (iden) => (dispatch) => {
  dispatch({ type: THERAPISTS_BOOKING_REQUEST })

  dispatch({ type: THERAPISTS_BOOKING_SAVE_PLAN_ID, payload: iden })
}

export const saveReservationID = (iden) => (dispatch) => {
  dispatch({ type: THERAPISTS_BOOKING_REQUEST })

  dispatch({ type: THERAPISTS_BOOKING_SAVE_RESERVATION_ID, payload: iden })
}

export const saveReferenceID = (iden) => (dispatch) => {
  dispatch({ type: THERAPISTS_BOOKING_REQUEST })

  dispatch({ type: THERAPISTS_BOOKING_SAVE_REFERENCE_ID, payload: iden })
}

export const saveSessionMetadata = (data) => (dispatch) => {
  dispatch({ type: THERAPISTS_BOOKING_REQUEST })

  dispatch({ type: THERAPISTS_BOOKING_SAVE_SESSION_METADATA, payload: data })
}

