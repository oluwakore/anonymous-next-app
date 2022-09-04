import React from "react";
import styles from  "./Counsel.module.scss";

export default function Counsel() {
  return (
    <div className={styles.counselContainer}>
      <div className={styles.counselMain}>
        <h1>How this Counseling works</h1>
        <div className={styles.counselCards}>
        <div className="">
          <img src="/images/Home/01.png" />
        </div>
        <div className="">
          <img src="/images/Home/02.png" />
        </div>
        <div className="">
          <img src="/images/Home/03.png" />
        </div>
        </div>
      </div>
    </div>
  );
}

// <div className='counsel'>
//     <div className='counsel-content'>
//         <h2>How this Counseling works</h2>
//         <div className='counsel-img'>
//             <img src='/images/Counsel-1.png' alt='' className='Counsel-1' />
//             <img src='/images/Counsel-2.png' alt='' className='Counsel-2' />
//             <img src='/images/Counsel-3.png' alt='' className='Counsel-3' />
//         </div>
//     </div>
// </div>
