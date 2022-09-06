import React from "react";
import Link from 'next/link';
import { Dropdown, Menu, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import  styles from "./Landing.module.scss";

const logo = {
  width: "2.5rem",
  height: "2.5rem",
};

const menu = (

  
  <Menu
    items={[
      {
        label:  <Link   style={{ textDecoration: "none" }} href="/therapy-form">Therapy Form</Link>,
        key: "0",
      }, {
        label:  <Link   style={{ textDecoration: "none" }} href="/form-success">Form Success</Link>,
        key: "1",
      }, {
        label:  <Link   style={{ textDecoration: "none" }} href="/share-story">Share Story</Link>,
        key: "2",
      }, {
        label:  <Link   style={{ textDecoration: "none" }} href="/stories">Stories</Link>,
        key: "3",
      }, {
        label:  <Link   style={{ textDecoration: "none" }} href="/stories/1000">Story Details</Link>,
        key: "4",
      }, {
        label:  <Link   style={{ textDecoration: "none" }} href="/chat-session">Chat Session</Link>,
        key: "5",
      },{
        label:  <Link   style={{ textDecoration: "none" }} href="/news-feed">News Feed</Link>,
        key: "6",
      },
    ]}
  />
);

export default function Landing() {
  return (
   <div className={styles.landingContainer}  style={{ backgroundImage: "url(/images/Home/landing-pic.jpg)",  }}>
    <nav className={styles.landingNav}>
    <div className={styles.landingImg}>
    <img src="/logo.svg" alt="logo" style={logo} />
    </div>
    <div className={styles.landingNavItems1}>
      <ul>
      <li>Home</li>
      <li>Community</li>
      <li>Counselling</li>
      <li>About Us</li>
      <li>
    <Dropdown overlay={menu}>
      <Space>
        Pages List
        <DownOutlined />
      </Space>
  </Dropdown>
    </li>
      </ul>
    </div>
    <div className={styles.landingButtons}>
      <Link  style={{ textDecoration: "none" }} href="/login">
      <button className={styles.button1}>Login</button>
      </Link>
      <Link  style={{ textDecoration: "none" }} href="/register">
      <button className={styles.button2}>Sign Up</button>
      </Link>
    </div>
    </nav>

    <div className={styles.landingDesc}>
    <h1>
      CAPTURE THE WHOLE <br /> WORLD WITH YOU WITH <br />{" "}
       <div style={{color: "#2BAB56"}}>ANONYMOUS CONFIDANT </div>
    </h1>
    <p className="">
    Giving priority href your identity with best emotional needs service. Keep on with us and learn more on how href navigate life, work, relationships, abuse and many more…
    </p>
    <div>
      
        <Link style={{ textDecoration: "none" }} href="/register">
          <button className="">GET STARTED NOW</button>
        </Link>
      
    </div>
    </div>
    <div className={styles.wavyPart}>
    <img src="/images/Home/wave.svg" alt="" />
    </div>
    {/* <img src="/images/Home/white.png" alt="" style={{outline: "3px solid white", border: "3px solid white" ,objectFit: "cover", width: "100%", height: "2rem"}} /> */}
   </div>
  );
}


{/* <div className="wrapper">
<div className="logo-css">
  <img src="/logo.svg" alt="logo" style={logo} />
</div>
<nav>
  <ul>
    <li>
      <a href="#">Home</a>
    </li>
    <li>
      <a href="#">Conselling</a>
    </li>
    <li>
      <a href="#">Community</a>
    </li>
    <li>
      <a href="#">About Us</a>
    </li>
    <li>
      <Link   style={{ textDecoration: "none" }} href="/register">Join Us</Link>
    </li>
    <li>
    <Dropdown overlay={menu}>
    <Link style={{ textDecoration: "none" }} href="#">
      <Space>
        Pages List
        <DownOutlined />
      </Space>
    </Link>
  </Dropdown>
    </li>
  </ul>
</nav>
<div className="landing-container">
  <div className="landing-parent">
    <h1>
      CAPTURE THE WHOLE <br /> WORLD WITH YOU WITH <br />{" "}
      <div className="AC"> ANONYMOUS CONFIDANT </div>
    </h1>
    <p className="landing-subtitle">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec duis
      elementum lobortis amet quis diam urna. Nibh in diam faucibus nibh
      dictum sed tempus
    </p>
    <div>
      
        <Link style={{ textDecoration: "none" }} href="/register">
          <button className="btn primary-btn">GET STARTED NOW</button>
        </Link>
      
    </div>
  </div>
</div>
</div> */}