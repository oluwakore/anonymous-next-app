import React from "react";
import styles from "./newsletter.module.scss";

function Newsletter() {
  return (
    <div
      className={styles.newsletterContainer}
      style={{ backgroundImage: "url(/images/dashboard/newsletter.png)" }}
    >
      <div className={styles.newsletterContainerMain}>
        <div className={styles.newsletterContainerMainDesc}>
          <h1>SUBSCRIBE TO OUR NEWSLETTER</h1>
          <p>Lorem ipsum dolor sit amet, consectetur sit amet,</p>
        </div>
        <form>
          <div className={styles.newsletterContainerMainForm}>
            <div className={styles.newsletterContainerInput}>
              <input type="email" placeholder="Enter Your Email Address" />
            </div>
            <button type="submit">Subscribe</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Newsletter;
