import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserDetails } from '../core/actions/useractions/useractions'
import moment from 'moment'
import ProfileTabs from '../components/profile/profileTabs/ProfileTabs'

function Profile() {

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const  { userInfo } = userLogin 

  console.log(userInfo)

  const loggedUser = userInfo.user

  useEffect(() => {
    dispatch(getUserDetails(loggedUser.id))
  }, [dispatch])





  return (
    <div>
{/* 
     <h1> {userInfo.user.username} </h1>
     <p> Joined {moment(userInfo.user.createdAt).format("LL")} </p> */}
      

     {/* <ProfileTabs /> */}
    </div>
  )
}

export default Profile