import { Router, useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Bars } from "react-loader-spinner";
import { getPlans } from "../api/base";
import SubscriptionCard from "../components/subscriptions/subscriptionCard";
import styles from "../styles/subscriptionPlans.module.scss";

function SubscriptionPlansComp() {
  // state for loading list of therapists
  const [loading, setLoading] = useState(false);
  // state for storing list of plans
  const [planList, setPlanList] = useState([]);

  const router = useRouter();

  // redux state for therapist id
  const therapId = useSelector((state) => state.therapistBooking);

  // get list of available plans from db
  const handleGetPlans = async () => {
    try {
      setLoading(true);
      setPlanList([]);

      const res = await getPlans();

      // console.log(res.data.data)

      setPlanList(res.data.data);

      setLoading(false);
      // console.log(planList)
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  // console.log(therapId?.therapistId)

  useEffect(() => {
    // redirect back to list of generated therapists if a therapist id is not found
    if (therapId?.therapistId) {
      handleGetPlans();
    } else {
      router.push("/therapist-checkout");
    }
  }, []);

  return (
    <div className={styles.topContainer}>
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
            <p className={styles.linkDesc}>Getting plans...</p>
          </div>
        </div>
      ) : (
        <div className={styles.container}>
          {planList?.map((item, index) => (
            <div key={index}>
              {/* single plan component */}
              <SubscriptionCard
                price={item.price}
                discount={item.discount}
                duration={item.duration}
                title={item.title}
                id={item._id}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SubscriptionPlansComp;
