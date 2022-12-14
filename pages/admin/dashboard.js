import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from "react-redux";
import AdminDashboardComp from '../../components/admin/AdminDashboard/Dashboard';
import styles from '../../styles/admin.module.scss'

function AdminDashboard() {

  const router = useRouter()

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const  { userInfo } = userLogin 

  const loggedUserToken = userInfo?.token

  const handlePush = () => {
    router.push('/admin/login')
  }


  return (
    <div>
      
      {
      userInfo && userInfo?.user?._kind === "admin"  ? (
        <div>
          <AdminDashboardComp adminToken={loggedUserToken} />
         </div> 
      ) : handlePush()
    }

    </div>
  )
}

export default AdminDashboard