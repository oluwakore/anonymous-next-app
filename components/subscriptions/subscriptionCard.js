import { Router, useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createReservation } from "../../api/base";
import {
  savePlanID,
  saveReservationID,
} from "../../core/actions/therapistListActions/therapistListactions";
import styles from "./subcard.module.scss";

function SubscriptionCard({ discount, duration, price, title, id }) {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const router = useRouter();

   // gets the userlogin redux state
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;


   // the id for the logged in user
  const loggedUserId = userInfo?.user?.id;

   // the token for the logged in user
  const loggedUserToken = userInfo?.token;

  // redux state for therapist details
  const therapId = useSelector((state) => state.therapistBooking);

  const { therapistId, planId } = therapId;

  // console.log(`${therapistId} ${planId}`)

  //processes selected plan and navigates to payment link
  const handleChoosePlanId = async () => {
    try {
      const res = await createReservation(
        loggedUserId,
        { therapistID: therapistId, subscriptionPlan: planId },
        loggedUserToken
      );
      //  console.log(res?.data?.data?.id)
      // if (res?.data?.data?.id) {
      dispatch(savePlanID(id));
      dispatch(saveReservationID(res?.data?.data?.id));
      router.push("/payment-link");
      // }

      // console.log(res.data.data.id)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      <h1>${price}</h1>
      <p> {title} </p>
      <div className={styles.lowerContainer}>
        <h4> {duration} hours </h4>
        <h4> {discount === 0 ? "" : <span>{discount}% Discount</span>} </h4>
      </div>
      <div className={styles.buttonComp}>
        <button onClick={handleChoosePlanId}>Choose</button>
      </div>
    </div>
  );
}

export default SubscriptionCard;
