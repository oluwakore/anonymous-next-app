import React, { useState } from "react";
import  Link  from 'next/link';
import { PlusCircleOutlined } from "@ant-design/icons";

import styles from  "./right.module.scss";

import moment from "moment";
import Calender from "./calendar";

function Right() {
  return (
    <div className={styles.rightMainCover}>
      <div className={styles.rightMainContainer}>
        <div className={styles.rightMainSvg}>
          <img src="images/dashboard/appt.svg" alt="" />
        </div>
        <div className={styles.rightButtonCover}>
          <div className={styles.rightButtonMain}>
            <PlusCircleOutlined style={{ fontSize: "2.5rem", color: "white" }} />
            <p>Make Appointment</p>
          </div>
        </div>
        <div style={{ width: "100%", position: "relative" }} >
          <div className={styles.rightCalendar}>
            <Calender />
          </div>
          <div className={styles.calendarImg}>
            <img
              style={{ height: "2.2rem", width: "2.2rem" }}
              src="images/dashboard/calender.svg"
              alt=""
            />
          </div>
        </div>
        <div className={styles.rightAppointment}>
          <h2>Up Coming Appointment</h2>
          <div className={styles.rightMenuCover} >
          <div className={styles.rightMenu1}>
            <h3>Today</h3>
            <p>Family Counselling</p>
            <p>09:00am - 09:50am</p>
            <p>Dr. Olakunle Johnson</p>
          </div>
          <div className={styles.rightMenu2}>
            <h3>22/10/2022</h3>
            <p>Family Counselling</p>
            <p>09:00am - 09:50am</p>
            <p>Dr. Olakunle Johnson</p>
          </div>
          <div className={styles.rightMenu1}>
            <h3>22/10/2022</h3>
            <p>Family Counselling</p>
            <p>09:00am - 09:50am</p>
            <p>Dr. Olakunle Johnson</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Right;
