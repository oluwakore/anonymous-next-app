import { useRouter } from 'next/router';
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { saveTherapistID } from '../../core/actions/therapistListActions/therapistListactions';
import styles from './therapcard.module.scss'


function TherapCard({ image, name, description, experience, rating,  id  }) {

  const router = useRouter()

  const dispatch = useDispatch()

  const gotoPlans = () => {
    dispatch(saveTherapistID(id))
    router.push('/subscription-plans')
    
  }

  return (
    <div  className={styles.container} >
      <img src={`${image ===  ('default.jpg' || "" )? './images/no-image.png' : image }`}  alt={name}/>
      <div className={styles.lowerContainer}>
        <p> {name} </p>
        <div className={styles.decs} >
          <h2>About Me</h2>
          <p> {description} </p>
        </div>
        <div className={styles.bottom}>
          <p>Work experience: {experience} </p>
          <p>Rating: {rating} </p>
        </div>
      </div>
      <div className={styles.downButton}>
        <button onClick={gotoPlans}  >Select {name} </button>
      </div>
    </div>
  )
}

export default TherapCard