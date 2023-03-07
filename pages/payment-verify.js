import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Card } from "antd";
import { Bars } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { verifyPaymentStatus } from "../api/base";
import styles from "../styles/paymentverify.module.scss";
import { saveSessionMetadata } from "../core/actions/therapistListActions/therapistListactions";
import Link from "next/link";

function PaymentVerify() {
  // state for loading  verification status
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  // redux state for therapist booking details
  const therapId = useSelector((state) => state.therapistBooking);

  // reference id for payment
  const { referenceId } = therapId;

  // gets the userlogin redux state
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // the id for the logged in user
  const loggedUserId = userInfo?.user?.id;

  // the token for the logged in user
  const loggedUserToken = userInfo?.token;

  // console.log(referenceId)

  // runs the verification check
  const handleVerify = async () => {
    try {
      // setLoading(true);

      const res = await verifyPaymentStatus(referenceId, loggedUserToken);

      console.log(res?.data?.data?.metadata);

      if (res?.data?.status === "success") {
        setLoading(false);
        dispatch(saveSessionMetadata(res?.data?.data?.metadata));
      }
      // console.log(res.data);
    } catch (error) {
      // setLoading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    if (referenceId) {
      setTimeout(() => {
        setLoading(false);
      }, 5000);
      handleVerify();
    }
  }, []);

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
            <p className={styles.linkDesc}>
              Verifying payment on our system...
            </p>
          </div>
        </div>
      ) : (
        <div className={styles.cardCover}>
          <Card bordered={true} className={styles.card}>
            <div className={styles.cardImg}>
              <img src={"/success-mark.png"} alt="success" />
              <p>Successfully verified!</p>
            </div>

            <div className={styles.cardButton}>
              <Link href="/appointment-details">
                <button>Proceed to appointment details</button>
              </Link>
              {/* <Link href="/dashboard">
                <button>Go to Dashboard</button>
              </Link> */}
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}

export default PaymentVerify;
