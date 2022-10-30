import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head';
import { useDispatch, useSelector } from "react-redux";
import DashboardNav from '../components/dashboard/dashboardNav/dashboardNav'
import MainContent from '../components/dashboard/middle-portion/root'
// import BottomCenter from '../components/dashboard/bottom-center/bottomCenter'
import Newsletter from '../components/dashboard/newsletter/newsletter'
import  Footer from '../components/Footer/Footer'
import styles from  '../styles/dashboard.module.scss'
import Link from 'next/link';
import { myStory } from '../api/base';
import { getUserDetails } from '../core/actions/useractions/useractions';

function Dashboard() {

  const router = useRouter()

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const  { userInfo } = userLogin 

  const loggedUserId = userInfo?.user?.id

  const loggedUserToken = userInfo?.token

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user }  = userDetails


  // console.log(user?.data?.activeSessions)

  const handlePush = () => {
    router.push('/login')
  }
 

  useEffect(() => {
    dispatch(getUserDetails(loggedUserId, loggedUserToken))
  }, [dispatch])


  return (
    <div  style={{ overflow: "hidden"}}>
        <Head>
        <title>Welcome to Anonymous Confidant, {userInfo?.user?.name} </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/blue-logo.png" />
      </Head>

        {
      userInfo ? (
        <div className={styles.dashContainer}>
        <DashboardNav />
       <MainContent  sessions={user?.data?.activeSessions}  />
       <Newsletter />
       <Footer />
        </div>
      ) : handlePush()
    }

    {/* {
      !userInfo && 
      (
  <div>
    <h2>Requested page could not be displayed</h2>
    <Link href="/">
    Go to Homepage
    </Link>
  </div> 
)
    } */}
    </div>
  )
}

export default Dashboard


