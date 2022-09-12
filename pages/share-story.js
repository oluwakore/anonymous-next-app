import React from 'react'
import DashboardNav from "../components/dashboard/dashboardNav/dashboardNav"
import Footer from '../components/Footer/Footer'
import ShareStoryComp from '../components/share-story/shareStory'

function ShareStory() {
  return (
    <div style={{overflow: "hidden"}}>
      <DashboardNav />
      <ShareStoryComp/>
      <Footer />
    </div>
  )
}

export default ShareStory