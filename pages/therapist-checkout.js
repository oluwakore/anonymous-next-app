import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Bars } from "react-loader-spinner";
import TherapCard from "../components/therapListCard/therapCard";
import styles from "../styles/therapistCheckout.module.scss";

function TherapistCheckout() {
  // state for loading list of therapists
  const [loading, setLoading] = useState(true);

  // redux state for list of generated therapists
  const therapResults = useSelector((state) => state.therapistList);

  const { therapArray } = therapResults;

  // console.log(therapArray)

  useEffect(() => {
    // delays for 5 secs before displaying results
    setTimeout(() => welcome(), 5000);
  }, []);

  // changes loading state
  const welcome = () => {
    setLoading(false);
  };

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
              Generating a list of potential therapists....
            </p>
          </div>
        </div>
      ) : (
        <>
          <div className={styles.umbrella}>
            {" "}
            <h2>
              {" "}
              Showing {therapArray.results} {`therapist(s)`}{" "}
            </h2>
          </div>
          <div className={styles.container}>
            {therapArray?.data?.map((item, index) => (
              <div key={index}>
                {/* component for each therapist details */}
                <TherapCard
                  image={item.image}
                  name={item.name}
                  description={item.about}
                  id={item.id}
                  rating={item.rating}
                  experience={item.work_experience}
                  availableTimes={item.availableTimes}
                />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default TherapistCheckout;
