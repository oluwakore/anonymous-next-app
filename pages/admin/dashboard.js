import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import AdminDashboardComp from "../../components/admin/AdminDashboard/Dashboard";
import styles from "../../styles/admin.module.scss";

function AdminDashboard() {
  const router = useRouter();

  // const dispatch = useDispatch()

  // gets the userlogin redux state
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // the token for the logged in user
  const loggedUserToken = userInfo?.token;

  // directs back to admin login page
  const handlePush = () => {
    router.push("/admin/login");
  };

  return (
    <div>
      {/* the ternary operation  redirects back to admin login page if user type is not admin */}
      {userInfo && userInfo?.user?._kind === "admin" ? (
        <div>
          <AdminDashboardComp adminToken={loggedUserToken} />
        </div>
      ) : (
        handlePush()
      )}
    </div>
  );
}

export default AdminDashboard;
