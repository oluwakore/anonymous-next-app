import React from 'react'
// import DashboardNav from '../components/dashboard/dashboardNav/dashboardNav'
import NewsFeedComp from '../components/news-feed/newsFeed'

function NewsFeed() {
  return (
    <div style={{overflow: "hidden"}}>
      {/* <DashboardNav/> */}
      <NewsFeedComp />
    </div>
  )
}

export default NewsFeed