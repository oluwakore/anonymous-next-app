import React from 'react'
import Link from 'next/link';
import styles from "./Share.module.scss";


export default function Share() {
    return (
        <div className={styles.shareContainer}>
        <div className={styles.shareMainpart}>
        <div className={styles.shareDesc1} >
         <h1>
         Share Your Story
         </h1>
         <p>
         We have the best room provided for ranting. Some problems get resolved naturally by just making them known. Our ranting room can be interactive and rigid based on your discretion and you are promised to be welcomed with loving human all around the world.
         </p>
         <Link href="/register" style={{ cursor: 'pointer' }}>
         <span>GET STARTED <img src='/images/Home/arrow-1.png' /> </span>
         </Link>
         </div> 
         <div className={styles.shareImg}>
            <img src='/images/Home/About-2.png' alt=''  className={styles.imageMain}/>
            <img src='/images/Home/About-11.png' alt='' className={styles.imageBase}/>
        </div> 
        <div className={styles.shareDesc} >
         <h1>
         Share Your Story
         </h1>
         <p>
         We have the best room provided for ranting. Some problems get resolved naturally by just making them known. Our ranting room can be interactive and rigid based on your discretion and you are promised to be welcomed with loving human all around the world.
         </p>
         <Link href="/register" style={{ cursor: 'pointer' }}>
         <span>GET STARTED <img src='/images/Home/arrow-1.png' /> </span>
         </Link>
         </div> 
        </div>  
        </div>
    )
}

 