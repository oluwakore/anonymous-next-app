import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { Bars } from "react-loader-spinner";
import { getPaymentLink, verifyPaymentStatus } from "../api/base";
import Link from "next/link";
import styles from "../styles/paymentlink.module.scss";
import { saveReferenceID } from "../core/actions/therapistListActions/therapistListactions";

function PaymentLink() {
  // state to store link to payment
  const [payUrl, setPayUrl] = useState();

  // state for loading payment link
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const dispatch = useDispatch();

  // redux state for therapist booking details
  const therapId = useSelector((state) => state.therapistBooking);

  const { reservationId, referenceId } = therapId;

  // console.log(reservationId)

  // gets the userlogin redux state
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // the id for the logged in user
  const loggedUserId = userInfo?.user?.id;

  // the token for the logged in user
  const loggedUserToken = userInfo?.token;

  // runs to generate payment link
  const handlePaymentLinkGen = async () => {
    try {
      setLoading(true);
      const res = await getPaymentLink(
        { sessionID: reservationId },
        loggedUserToken
      );

      setPayUrl(res?.data?.authorization_url);
      dispatch(saveReferenceID(res?.data?.reference));

      // console.log(res?.data)
      setLoading(false);
      // console.log(res.data.authorization_url)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handlePaymentLinkGen();
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <div
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              margin: "auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {" "}
            <Bars height="40" width="40" color="#0e0b8b" />{" "}
            <p className={styles.linkDesc}>Fetching payment link...</p>
          </div>
        </div>
      ) : (
        <div className={styles.buttonCover}>
          <a
            /* target="_blank" */ href={payUrl} /* rel="noopener noreferrer" */
          >
            Proceed to payment
          </a>
        </div>
      )}
    </div>
  );
}

export default PaymentLink;
