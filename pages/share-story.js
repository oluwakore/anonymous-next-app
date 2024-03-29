import React from "react";
import Head from "next/head";
import DashboardNav from "../components/dashboard/dashboardNav/dashboardNav";
import Footer from "../components/Footer/Footer";
import ShareStoryComp from "../components/share-story/shareStory";

function ShareStory() {
  return (
    <div>
      <Head>
        <title>Tell your story</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/blue-logo.png" />
      </Head>
      <>
        {/* dashboard component */}
        <DashboardNav />

        {/* share story component */}
        <ShareStoryComp />
      </>
    </div>
  );
}

export default ShareStory;
