import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getDetails } from '../api/base'
import TherapistDetails from '../components/therapistDetails/TherapistDetails'
import styles from '../styles/appointmentdetails.module.scss'


function appointmentDetails() {

  const [loading, setLoading] = useState(false)
  const [appointmentDetails, setAppointmentDetails] = useState()
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const  { userInfo } = userLogin 

  const loggedUserId = userInfo?.user?.id

  const loggedUserToken = userInfo?.token

  const handleGetAppointmentDetails = async() => {
    try {
      setLoading(true)

      const res = await getDetails(loggedUserId, loggedUserToken)

      console.log(res?.data.data?.activeSessions)
      setAppointmentDetails(res?.data.data?.activeSessions)
      console.log(appointmentDetails)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(false)
    }
  }

  useEffect(() => {
    if (loggedUserToken !== null) {
      handleGetAppointmentDetails()
    }
  }, [])

  return (
    <div className={styles.container} >
      <div className={styles.subContainer}>
      {
        appointmentDetails?.map((item, index) => (
          <div key={index}>
           <TherapistDetails therapistName={item.therapist.name} therapistImg={item.therapist.image}  therapistRating={item.therapist.averageRating} sessionStatus={item.paymentStatus}  />
          </div> 
        ))
      }
    </div>
    </div>
  )
}

export default appointmentDetails