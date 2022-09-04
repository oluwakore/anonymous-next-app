import React from 'react'
// import DashboardNav from '../components/dashboard/dashboardNav/dashboardNav'
import Footer from '../../components/Footer/Footer'
import StoryDetailsComp from '../../components/storyDetails/storyDetails'

function StoryDetails() {
  return (
    <div style={{overflow: "hidden"}} >
      {/* <DashboardNav/> */}
      <StoryDetailsComp />
      <Footer />
    </div>
  )
}

export default StoryDetails