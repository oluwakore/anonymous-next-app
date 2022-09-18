import React from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from "react-redux";
import DashboardNav from '../components/dashboard/dashboardNav/dashboardNav'
import MainContent from '../components/dashboard/middle-portion/root'
// import BottomCenter from '../components/dashboard/bottom-center/bottomCenter'
import Newsletter from '../components/dashboard/newsletter/newsletter'
import  Footer from '../components/Footer/Footer'
import styles from  '../styles/dashboard.module.scss'

function Dashboard() {

  const router = useRouter()

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const  { userInfo } = userLogin 

  const handlePush = () => {
    router.push('/login')
  }

  return (
    <div  style={{ overflow: "hidden"}}>
        {
      userInfo ? (
        <div className={styles.dashContainer}>
        <DashboardNav />
       <MainContent />
       <Newsletter />
       <Footer />
        </div>
      ) : handlePush()
    }
    </div>
  )
}

export default Dashboard