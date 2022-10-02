import React from 'react'
import Head from 'next/head'
import DashboardNav from '../components/dashboard/dashboardNav/dashboardNav'
import TherapyFormComp from '../components/therapyForm/therapy-form'


function TherapyForm() {



  return (
    <div  /*style={{ background: "#fcfcfc" }} */>
       <Head>
        <title>Connect with your therapist</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/blue-logo.png" />
      </Head>

      <DashboardNav/>
      <TherapyFormComp /> 
    </div>
  )
}

export default TherapyForm