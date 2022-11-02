import React, { useEffect, useState } from 'react'
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
import moment from "moment";
import { myStory } from '../api/base';
import { getUserDetails, storeApptDatesArray } from '../core/actions/useractions/useractions';

function Dashboard() {


  const [apptArr, setApptArr] = useState(null)

  const router = useRouter()

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const  { userInfo } = userLogin 

  const loggedUserId = userInfo?.user?.id

  const loggedUserToken = userInfo?.token

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user }  = userDetails

  const adjustDateFormat = (dateArray) => {
    let holder = []
    const month = dateArray[0]
    const days = dateArray[1]
    const year = dateArray[2]


    holder.push(year, month, days)
    return holder.join("-")
  }


  const calDetr = () => {
    let newArray = []
    user?.data?.activeSessions?.forEach((item) => {
      item?.appointments?.filter((list) => list.status === "pending")?.forEach((subcard) => {
          newArray.push({
              date: adjustDateFormat(moment(subcard.start_time).format("L").split("/")),
              title: subcard.title === undefined ? 'Appointment' : subcard.title,
              appt_day: moment().format('YYYY-MM-DD') === adjustDateFormat(moment(subcard.start_time).format("L").split("/")) ? 'Today' :  moment(subcard.start_time).format("LL"),
              timeRange: `${moment(subcard.start_time).format("LT")} - ${moment(
                subcard.end_time
              ).format("LT")}`,
              therapist_name: `Dr. ${item.therapist.name}`,
          });
        });
      // arrayCal.push(`${item.therapist.name}`)
    });

    const final =  newArray.filter((c, index) => {
      return newArray.indexOf(c) === index;
  });
  
   

     let secondNewArray = []

     secondNewArray.push(final)

     return secondNewArray[0]

    // setApptArr(secondNewArray[0])

  };


  // console.log(user?.data?.activeSessions)

  const handlePush = () => {
    router.push('/login')
  }
 

  useEffect(() => {
    dispatch(getUserDetails(loggedUserId, loggedUserToken))
    //  calDetr()
      // dispatch(storeApptDatesArray(calDetr()))
    
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
       <MainContent  sessions={user?.data?.activeSessions}  calendarDates={calDetr()} />
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


