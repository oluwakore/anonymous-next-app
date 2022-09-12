import React from "react";
import styles from  "./Counsel.module.scss";

export default function Counsel() {
  return (
    <div className={styles.counselContainer}>
      <div className={styles.counselMain}>
        <h1>How this Counseling works</h1>
        <div className={styles.counselCards}>
        <div className="">
          <img src="/images/Home/01.png" />
        </div>
        <div className="">
          <img src="/images/Home/02.png" />
        </div>
        <div className="">
          <img src="/images/Home/03.png" />
        </div>
        </div>
      </div>
    </div>
  );
}

