import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import DashboardNav from '../../components/dashboard/dashboardNav/dashboardNav'
import Footer from '../../components/Footer/Footer'
import StoryDetailsComp from '../../components/storyDetails/storyDetails'
import { getStory } from '../../api/base'
import { getStoryDetails, saveStoryId } from '../../core/actions/storyactions/storyactions'

function StoryDetails() {

 
  
  const router = useRouter()


  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const  { userInfo } = userLogin 


  const storyId = useSelector((state) => state.storyIden)

  const authorID = userInfo?.user?.id
 
  const authorName = userInfo?.user?.name

  const loggedUserToken = userInfo?.token
//  console.log(storyId?.id)

// console.log(loggedUserToken)

 const passedId = storyId?.id
 


  return (
    <>
    <Head>
        <title>Story Details</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/blue-logo.png" />
      </Head>
   { storyId?.loading ? 'Loading...' : <div style={{overflow: "hidden"}} >
      {/* <DashboardNav/> */}
      <StoryDetailsComp storyInfoId={passedId} authorID={authorID} userToken={loggedUserToken} authorName={authorName}  />
      {/* <Footer /> */}
    </div>}
    </>
  )
}

export default StoryDetails