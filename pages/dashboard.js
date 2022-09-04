import React from 'react'
import DashboardNav from '../components/dashboard/dashboardNav/dashboardNav'
import MainContent from '../components/dashboard/middle-portion/root'
// import BottomCenter from '../components/dashboard/bottom-center/bottomCenter'
import Newsletter from '../components/dashboard/newsletter/newsletter'
import  Footer from '../components/Footer/Footer'
import styles from  '../styles/dashboard.module.scss'

function Dashboard() {
  return (
    <div className={styles.dashContainer}>
    <DashboardNav />
   <MainContent />
   <Newsletter />
   <Footer />
    </div>
  )
}

export default Dashboard