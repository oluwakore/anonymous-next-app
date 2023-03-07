import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import DashboardNav from "../components/dashboard/dashboardNav/dashboardNav";
import MainContent from "../components/dashboard/middle-portion/root";
// import BottomCenter from '../components/dashboard/bottom-center/bottomCenter'
import Newsletter from "../components/dashboard/newsletter/newsletter";
import Footer from "../components/Footer/Footer";
import styles from "../styles/dashboard.module.scss";
import Link from "next/link";
import moment from "moment";
import { myStory } from "../api/base";
import {
  getUserDetails,
  storeApptDatesArray,
} from "../core/actions/useractions/useractions";

function Dashboard() {
  const [apptArr, setApptArr] = useState(null);

  const router = useRouter();

  const dispatch = useDispatch();

  // gets the userlogin redux state
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // the id for the logged in user
  const loggedUserId = userInfo?.user?.id;

  // the token for the logged in user
  const loggedUserToken = userInfo?.token;

  // gets the user details redux state
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  // format date array in form yyyy-mm-dd
  const adjustDateFormat = (dateArray) => {
    let holder = [];
    const month = dateArray[0];
    const days = dateArray[1];
    const year = dateArray[2];

    holder.push(year, month, days);
    return holder.join("-");
  };

  // function to parse appointments to send to dashboard
  const calDetr = () => {
    let newArray = [];
    user?.data?.activeSessions?.forEach((item) => {
      item?.appointments
        ?.filter((list) => list.status === "pending")
        ?.forEach((subcard) => {
          newArray.push({
            date: adjustDateFormat(
              moment(subcard.start_time).format("L").split("/")
            ),
            title: subcard.title === undefined ? "Appointment" : subcard.title,
            appt_day:
              moment().format("YYYY-MM-DD") ===
              adjustDateFormat(
                moment(subcard.start_time).format("L").split("/")
              )
                ? "Today"
                : moment(subcard.start_time).format("LL"),
            timeRange: `${moment(subcard.start_time).format("LT")} - ${moment(
              subcard.end_time
            ).format("LT")}`,
            therapist_name: `Dr. ${item.therapist.name}`,
          });
        });
      // arrayCal.push(`${item.therapist.name}`)
    });

    const final = newArray.filter((c, index) => {
      return newArray.indexOf(c) === index;
    });

    let secondNewArray = [];

    secondNewArray.push(final);

    return secondNewArray[0];

    // setApptArr(secondNewArray[0])
  };

  // console.log(user?.data?.activeSessions)

  // directs back to user login page
  const handlePush = () => {
    router.push("/login");
  };

  useEffect(() => {
    dispatch(getUserDetails(loggedUserId, loggedUserToken));
  }, [dispatch]);

  return (
    <div style={{ overflow: "hidden" }}>
      <Head>
        <title>Welcome to Anonymous Confidant, {userInfo?.user?.name} </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/blue-logo.png" />
      </Head>
       {/* the ternary operation  redirects back to login page if user info not found */}
      {userInfo ? (
        <div className={styles.dashContainer}>
          {/* navigation component */}
          <DashboardNav />

         {/* main dashboard component */}
          <MainContent
            sessions={user?.data?.activeSessions}
            calendarDates={calDetr()}
          />
          {/* newsletter component */}
          <Newsletter />
          {/* footer component */}
          <Footer />
        </div>
      ) : (
        handlePush()
      )}
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
      {/* <Link href={"/chat-session"}>go to chat</Link> */}
    </div>
  );
}

export default Dashboard;
