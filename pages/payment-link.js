import React, { useEffect, useState }  from 'react'
import { useRouter  } from 'next/router'
import { useDispatch, useSelector } from "react-redux"
import { Bars } from "react-loader-spinner";
import { getPaymentLink, verifyPaymentStatus } from '../api/base'
import Link from 'next/link'
import styles from '../styles/paymentlink.module.scss'
import { saveReferenceID } from '../core/actions/therapistListActions/therapistListactions';

function PaymentLink() {


  const [payUrl, setPayUrl] = useState()
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  const dispatch = useDispatch()


  const therapId = useSelector((state) => state.therapistBooking)

  const {reservationId, referenceId} = therapId
  
  // console.log(reservationId)

  const userLogin = useSelector((state) => state.userLogin)
  const  { userInfo } = userLogin 

  const loggedUserId = userInfo?.user?.id

  const loggedUserToken = userInfo?.token

  

  const handlePaymentLinkGen = async() => {
    try{
      setLoading(true)
      const res = await getPaymentLink({sessionID: reservationId}, loggedUserToken)

      if(res?.data) {
        setPayUrl(res?.data?.authorization_url)
        dispatch(saveReferenceID(res?.data?.reference))

        // console.log(res?.data)
      }
      setLoading(false)
      // console.log(res.data.authorization_url)
    } catch(error){
      console.error(error)
    }
  }




  useEffect(() => {
    handlePaymentLinkGen()
  }, [])


  return (
    <div>
      {
        loading ? ( <div
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
            <p className={styles.linkDesc}>Fetching payment link...</p>
          </div>
        </div>) : 
        (
        <div className={styles.buttonCover}>
        <a /* target="_blank" */ href={payUrl}  /* rel="noopener noreferrer" */>
        Proceed to payment
      </a>
      </div>
      )
      }
     
      
    </div>
  )
}

export default PaymentLink