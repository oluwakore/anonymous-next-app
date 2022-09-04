import React from "react";
import { PhoneOutlined, MailOutlined, TwitterOutlined, LinkedinFilled, InstagramOutlined } from '@ant-design/icons'
import styles from "./Footer.module.scss";


export default function Footer() {
  return (
    
    <footer className={styles.footerContainer}>
        <div className={styles.mainContainer}>
            <div className={styles.footerRow}>
                <div className={styles.footerColumnStoryPart}>
                    <h4>Our Story</h4>
                <ul>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec duis elementum lobortis amet quis diam urna. Nibh in diam faucibus nibh dictum sed tempus.</li>
                </ul>
                </div>
                <div className={styles.footerColumnAboutUsPart}>
                    <h4>About Us</h4>
                <ul className={styles.ulAboutUs}>
                    <li>Our Mission</li>
                    <li>Our Vision</li>
                    <li>Our Partners</li>
                </ul>
                </div>
                <div className={styles.footerColumnHelpCenterPart}>
                    <h4>Help Center</h4>
                <ul className={styles.ulHelpCenter}>
                <li>
                    <div className={styles.helpCenterIcons}><MailOutlined style={{ color: "white",  fontSize:"25px" }} /> <span>anonymousconfidant@gmail.com</span></div>
                    </li>
                <li>
                    <div className={styles.helpCenterIcons1}><PhoneOutlined style={{ color: "white", transform: "scaleX(-1)", fontSize:"25px" }} /> <span>+234-9025024319</span></div>
                    </li>
                <li style={{}}>
                    <div className={styles.helpCenterIcons2} >
                    <TwitterOutlined style={{ fontSize:"25px",}} /> <LinkedinFilled style={{ fontSize:"25px"}} /> <InstagramOutlined style={{ fontSize:"25px"}} /> 
                    </div>
                   </li>
                </ul>
                </div>
            </div>
        </div>
    </footer>
  );
}
