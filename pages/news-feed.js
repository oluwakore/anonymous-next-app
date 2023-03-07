import React from "react";
import Head from "next/head";
import DashboardNav from "../components/dashboard/dashboardNav/dashboardNav";
import NewsFeedComp from "../components/news-feed/newsFeed";

function NewsFeed() {
  return (
    <div style={{ overflow: "hidden" }}>
      <Head>
        <title>Anonymous Confidant News Feeds</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/blue-logo.png" />
      </Head>
      {/* dashboard component */}
      <DashboardNav />
      {/* newsfeed component  */}
      <NewsFeedComp />
    </div>
  );
}

export default NewsFeed;
