import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getDetails } from '../api/base'
import { Bars } from "react-loader-spinner";
import TherapistDetails from '../components/therapistDetails/TherapistDetails'
import styles from '../styles/appointmentdetails.module.scss'


function AppointmentDetails() {

  const [loading, setLoading] = useState(false)
  const [appointmentDetails, setAppointmentDetails] = useState()
  const [appointmentDetail, setAppointmentDetail] = useState()
  const [paymentStatus, setPaymentStatus] = useState()
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const  { userInfo } = userLogin 

  const loggedUserId = userInfo?.user?.id

  const loggedUserToken = userInfo?.token

  const handleGetAppointmentDetails = async() => {
    try {
      setLoading(true)

      const res = await getDetails(loggedUserId, loggedUserToken)

      // console.log(res?.data.data?.activeSessions)
      setAppointmentDetails(res?.data.data?.activeSessions)
      // console.log(appointmentDetails)
      // console.log(res?.data.data?.activeSessions[0].therapist)
      // console.log(res?.data.data?.activeSessions[0].paymentStatus)
      setPaymentStatus(res?.data.data?.activeSessions[0].paymentStatus)
      setAppointmentDetail(res?.data.data?.activeSessions[0].therapist)
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
      {
        loading ? (
          <div
            style={{
              width: "100%",
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                margin: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {" "}
              <Bars height="40" width="40" color="#0e0b8b" />{" "}
              <p className={styles.linkDesc}>
                Fetching appointment details...
              </p>
            </div>
          </div>
        ) : (<div className={styles.subContainer}>
            <TherapistDetails therapistName={appointmentDetail?.name} therapistImg={appointmentDetail?.image}  therapistRating={appointmentDetail?.averageRating} sessionStatus={paymentStatus}  availableTimes={appointmentDetail?.availableTimes} />
           </div>)
      }
    </div>
  )
}

export default AppointmentDetails