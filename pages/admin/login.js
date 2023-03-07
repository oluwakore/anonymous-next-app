import React from "react";
import AdminLogin from "../../components/admin/AdminLogin/AdminLogin";
import styles from "../../styles/admin.module.scss";

function login() {
  return (
    <div className={styles.mainContainer}>
      {/* admin login component */}
      <AdminLogin />
    </div>
  );
}

export default login;
