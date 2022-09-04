
import React from 'react'
import AnonyStoriesComp from '../../components/anonystories/anonyStories'
// import DashboardNav from '../components/dashboard/dashboardNav/dashboardNav'
import Footer from '../../components/Footer/Footer'

function Stories() {
  return (
    <div style={{overflow: "hidden"}}>
      {/* <DashboardNav /> */}
      <AnonyStoriesComp />
      <Footer />
    </div>
  )
}

export default Stories