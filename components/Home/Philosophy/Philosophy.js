import React from "react";
import styles from "./Philosophy.module.scss";

export default function Philosophy() {
  return (
    <div
      className={styles.philoContainer}
      style={{ backgroundImage: "url(/images/Home/philo.png)" }}
    >
      <div className={styles.philoMain}>
        <h1>OUR PHILOSOPHY</h1>
        <p>
          Creating an environment serene for reflection and interaction with or
          without identity revelation, to the sole aim of meeting the hurtful
          minds for its healing
        </p>
      </div>
    </div>
  );
}
