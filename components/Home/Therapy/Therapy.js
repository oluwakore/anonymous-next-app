import React, { useState } from "react";
import Link from "next/link";
import styles from "./Therapy.module.scss";

export default function Therapy() {



  return (
    <div className={styles.therapyContainer}>
    
   
      <div className={styles.therapyMainpart}>
          <div className={styles.therapyDesc} >
         <h1>
         Speak to a Therapist
         </h1>
         <p>
         We are here to serve and meet your needs with professional and experienced therapists at your convenience. Your identity is a choice to reveal or conceit, our aim is to meet your need and get through your hurdles with you. Your healing matters to us.
         </p>
         <Link href="/register"  style={{ cursor: 'pointer' }}>
         <span>GET STARTED <img src='/images/Home/arrow-1.png' /> </span>
         </Link>
         </div>
         <div className={styles.therapyImg}>
            <img src='/images/Home/About-1.png' alt=''  className={styles.imageMain}/>
            <img src='/images/Home/About-11.png' alt='' className={styles.imageBase}/>
        </div>  
        </div>  
    </div>
  );
}




 