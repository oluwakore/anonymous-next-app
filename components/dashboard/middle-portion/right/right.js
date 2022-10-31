import React, { useState } from "react";
import { Empty } from 'antd';
import  Link  from 'next/link';
import { PlusCircleOutlined } from "@ant-design/icons";

import styles from  "./right.module.scss";

import moment from "moment";
import Calender from "./calendar";

function Right({ sessionsData }) {

  // console.log(sessionsData)

  // const filteredSessions = sessionsData.filter((item) =>   )
  return (
    <div className={styles.rightMainCover}>
      <div className={styles.rightMainContainer}>
        <div className={styles.rightMainSvg}>
          <img src="images/dashboard/appt.svg" alt="" />
        </div>
        <div className={styles.rightButtonCover}>
          <div className={styles.rightButtonMain}>
            <PlusCircleOutlined style={{color: "white" }} className={styles.rightButtonMainIcon} />
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
          {
            sessionsData?.length === 0 ? 
            (<div className={styles.emptyMsg} > <Empty  
              imageStyle={{
                height: 80,
              }}
              description={
              <span className={styles.emptyMsgSpan} >
               You do not have any appointments yet...
              </span>
            } />  </div>) 
            : (<div  className={styles.rightMenuCover}  >
              {
               sessionsData?.map((item, index) => (
                 <div key={index}> {item?.appointments.filter((list) => list.status === "pending" ).map((sub, index) => (
                   <div key={index}  className={styles.rightMenu1} >
                     <h3> {moment(sub.start_time).format('L') } </h3>
                      <p> {sub.title} </p>
                      <p> { `${moment(sub.start_time).format('LT')} - ${moment(sub.end_time).format('LT')}`} </p>
                     <p> Dr. {item.therapist.name} </p>
                     </div>
                  
                 ))} </div>
               ))
              }
         
             </div>)
          }
        </div>
      </div>
    </div>
  );
}

export default Right;



//  {/* <div className={styles.rightMenu1}>
//             <h3>22/10/2022</h3>
//             <p>Family Counselling</p>
//             <p>09:00am - 09:50am</p>
//             <p>Dr. Olakunle Johnson</p>
//           </div> */}
