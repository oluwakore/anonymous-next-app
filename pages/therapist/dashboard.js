import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from "react-redux";
import TherapistDashboardComp from '../../components/therapist/TherapistDashboard/therapistDashboard'

function TherapistDashboard() {

  const router = useRouter()

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const  { userInfo } = userLogin 

  const loggedUserToken = userInfo?.token

  const handlePush = () => {
    router.push('/therapist/login')
  }

  return (
    <div> 
       {
      userInfo && userInfo?.user?._kind === "therapist"  ? (
        <div>
          <TherapistDashboardComp therapistToken={loggedUserToken} therapistInfo={userInfo?.user}  />
         </div> 
      ) : handlePush()
    }
    </div>
  )
}

export default TherapistDashboard