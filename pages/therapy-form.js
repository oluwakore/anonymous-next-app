import React from "react";
import Head from "next/head";
import DashboardNav from "../components/dashboard/dashboardNav/dashboardNav";
import TherapyFormComp from "../components/therapyForm/therapy-form";
import { useSelector } from "react-redux";

function TherapyForm() {
  // gets the userlogin redux state
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // the token for the logged in user
  const loggedUserToken = userInfo?.token;

  return (
    <div>
      <Head>
        <title>Connect with your therapist</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/blue-logo.png" />
      </Head>

      {/* the dashboard component */}
      <DashboardNav />

      {/* the therapist form component */}
      <TherapyFormComp userToken={loggedUserToken} />
    </div>
  );
}

export default TherapyForm;
