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
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const therapId = useSelector((state) => state.therapistBooking);

  const { referenceId } = therapId;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const loggedUserId = userInfo?.user?.id;

  const loggedUserToken = userInfo?.token;

  // console.log(loggedUserToken)

  const handleVerify = async () => {
    // setLoading(true)
    try {
      // setLoading(true);

      const res = await verifyPaymentStatus(referenceId, loggedUserToken);

      if (res.data.status === "success") {
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
        setLoading(false)
      }, 5000)
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
              {/* <Link href="/appointment-details">
                <button>Proceed to appointment details</button>
              </Link> */}
              <Link href="/dashboard">
                <button>Go to Dashboard</button>
              </Link>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}

export default PaymentVerify;
