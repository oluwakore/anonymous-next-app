import React from 'react'
import styles from  '../styles/formSuccess.module.scss'

function FormSuccess() {
  return (
    <div className={styles.topRoot}>
      
      <div className={styles.formSuccessContainer}>
      <h1>THANK YOU FOR SHARING YOUR STORY <br/> WITH US</h1>
      <p>Please Note that your identity will be made Anonymous to the public</p>
      <div className={styles.formSuccessButton}>
        <button>
        Return Home
        </button>
        <button>
        Speak With A Therapist
        </button>
      </div>
    </div>
      
    </div>
  )
}

export default FormSuccess