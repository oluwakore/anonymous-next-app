import React from 'react'
import TherapistLogin from '../../components/therapist/TherapistLogin/therapistLogin'
import styles from '../../styles/admin.module.scss'

function login() {
  return (
    <div className={styles.mainContainer}>
     <TherapistLogin />
    </div>
  )
}

export default login