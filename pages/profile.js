import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserDetails } from '../core/actions/useractions/useractions'
import moment from 'moment'
import ProfileTabs from '../components/profile/profileTabs/ProfileTabs'
import { getDetails } from '../api/base'
import {message} from 'antd'
import { InfinitySpin } from 'react-loader-spinner'

function Profile() {

  const dispatch = useDispatch()

  // const [loading, setLoading] = useState(false)


  const userLogin = useSelector((state) => state.userLogin)
  const  { userInfo } = userLogin 

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error }  = userDetails
  // console.log(userInfo)

  const loggedUserId = userInfo?.user?.id

  const loggedUserToken = userInfo?.token

  // const getDetailsHandler = async () => {
  //     const res = await getDetails(loggedUserId, loggedUserToken)
  //     console.log(res.data)
  // }

  useEffect(() => {

    // getDetailsHandler()
    // setLoading(true)
    dispatch(getUserDetails(loggedUserId, loggedUserToken))
    // setLoading(false)
  }, [dispatch])





  return (
    <div>
  
{/* 
     <h1> {userInfo.user.username} </h1>
     <p> Joined {moment(userInfo.user.createdAt).format("LL")} </p> */}
      


      {
        error && message.error(error)
      }
     {
      loading ? <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}> <InfinitySpin width='200'color='#0e0b8b' /> </div> :  <ProfileTabs userToken={loggedUserToken} />
     }
    </div>
  )
}

export default Profile