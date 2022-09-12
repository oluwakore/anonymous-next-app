import React from 'react'
import Link from 'next/link';
import styles from "./Thought.module.scss";


export default function Thought() {
    return (
        <div className={styles.thoughtContainer}>
        <div className={styles.thoughtMainpart}>
          <div className={styles.thoughtDesc}>
         <h1>
         Your Opinion Matters
         </h1>
         <p>
         Air your opinion on trending issues from your neighbourhood and issues and around the world…
         </p>
         <div className={styles.thoughtList}>
         <div className={styles.thoughtListItems}> <img src='/images/Home/circle.png' alt='' /> <span>Rape in Ikorodu Lagos</span>  </div>
         <div className={styles.thoughtListItems}> <img src='/images/Home/circle.png' alt='' /> <span>Justice for Femi</span>  </div>
         <div className={styles.thoughtListItems}> <img src='/images/Home/circle.png' alt='' /> <span> Trust is a risk</span> 
        </div>
         {/* <img src='/images/Home/circle.png' alt='' /> */}
         </div>
         <Link href="/register" style={{ cursor: 'pointer' }}>
         <span>GET STARTED <img src='/images/Home/arrow-1.png' /> </span>
         </Link>
         </div> 
         <div className={styles.thoughtImg}>
            <img src='/images/Home/About-3.png' alt=''  className={styles.imageMain}/>
            <img src='/images/Home/About-11.png' alt='' className={styles.imageBase}/>
        </div>  
        </div>  
        </div>
    )
}


 