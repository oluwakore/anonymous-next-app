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
                <li>Anonymous Confidant is a telepathy hub designed to specifically heal human hurtful minds and as a proven process that people can testify of recieving help anonymously, the site is made open to the world for this sole purpose.</li>
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
                <ul>
                <li>
                <div className={styles.helpCenterIcons1}><MailOutlined style={{ color: "white", fontSize:"1.5rem" }} /> <span className={styles.smallerFont}>anonymousconfidant@gmail.com</span></div>
                    </li>
                <li>
                    <div className={styles.helpCenterIcons1}><PhoneOutlined style={{ color: "white", transform: "scaleX(-1)", fontSize:"1.5rem" }} /> <span className={styles.smallerFont}>+234-9025024319</span></div>
                    </li>
                <li>
                    <div className={styles.helpCenterIcons2} >
                    <TwitterOutlined style={{ fontSize:"1.5rem", marginLeft: ".5rem"}} /> <LinkedinFilled style={{ fontSize:"1.5rem", marginLeft: ".5rem"}} /> <InstagramOutlined style={{ fontSize:"1.5rem", marginLeft: ".5rem"}} /> 
                    </div>
                   </li>
                </ul>
                </div>
            </div>
        </div>
    </footer>
  );
}
