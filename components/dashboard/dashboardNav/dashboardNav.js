import React , {useRef, useState} from "react";
import  Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { Dropdown, Menu, Space } from "antd";
import { DownOutlined, LogoutOutlined, InfoCircleOutlined , UserOutlined, MenuOutlined, CloseOutlined} from "@ant-design/icons";
import styles from "./dashboardNav.module.scss";
import {
  notification,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser, getUserDetails } from "../../../core/actions/useractions/useractions";

const openNotificationWithIcon = (type, msg, desc) => {
  notification[type]({
    message: msg,
    description: desc,
  });
};



function DashboardNav() {

  const [menuOpen, setMenuOpen] = useState(false)


  const ref = useRef()

  // const dropdownRef = ref.current
  

 
  const router = useRouter()

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userDetails = useSelector((state) => state.userDetails)
  const { user }  = userDetails
 
  // console.log(userInfo?.token)
  // console.log(userInfo?.user.id)
 
 




const logoutHandler = () => {
  router.push('/')
  // dispatch(logoutUser())
  openNotificationWithIcon('success', 'Sign Out', 'Logout was succesful.')
  console.log('Logged Out')
}


  const menu = (
    <Menu
      items={[
        {
          label:  <Link style={{ textDecoration: "none" }} href="/profile">
         <h4 className="label-font" > <UserOutlined/>  Your Info</h4>
        </Link>,
          key: "0",
        }, 
        // {
        //   label:  <Link style={{ textDecoration: "none" }} to="#" onClick={logoutHandler}>
        //   <h4 className="label-font" >Logout</h4>
        //  </Link>,
        //   key: "1",
        // },
        {
          label:  <Link style={{ textDecoration: "none" }} href="/" >
          <h4 className="label-font" onClick={logoutHandler} > <LogoutOutlined/> Logout</h4>
         </Link>,
          key: "1",
        },
      ]}
    />
  );

  const getInitials = (nameString) => {
  
    const fullName = nameString.split(" ")
    const initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
    const result = initials.toUpperCase();

    return result
    
  }

  return (
    <div className={styles.dashboardContainer}>
          {
      menuOpen && (
        <div className={styles.openMenuPart}>
          <CloseOutlined style={{fontSize: "2rem" }} className={styles.close} onClick={() => setMenuOpen(false)}  />
          <ul className={styles.openMenuList} >
          {/* <li
          className={styles.openListItem}
          >Home</li> */}
          <li className={styles.openListItem}>Community</li>
         <li className={styles.openListItem}>Counselling</li>
         <li className={styles.openListItem}>About Us</li>
        
          </ul>
        </div> 
      )
    }
      <div className={styles.dashboardContainerMain}>
      <div className={styles.dashboardLogo}>
       <img 
       src={"/blue-logo.png"}
       alt="logo"
       style={{ width: "4.2rem", height: "4.2rem"}}
       className={styles.dashboardLogoImg}
       />

      </div>
      
    <div className={styles.dashboardMenuBar}>
    <MenuOutlined   style={{fontSize: "2rem", color: "#0e0b8b" }} onClick={() => setMenuOpen(true)}/>
    </div>

      
      <ul className={styles.dashboardMenu}>
        <li> <Link style={{ textDecoration: "none" }} href="/">
          Home
        </Link></li>
        <li><Link style={{ textDecoration: "none" }} href="#">
          Counselling
        </Link></li>
        <li><Link style={{ textDecoration: "none" }} href="#">
          Community
        </Link></li>
        <li><Link style={{ textDecoration: "none" }} href="3">
          About Us
        </Link></li>
      </ul>

    <div className={ userInfo ? styles.avatarMain : styles.inactive}
    >
      <Dropdown overlay={menu} trigger={['click']}  >
            <Space>
              <div className={styles.avatarHolder} >
              { userInfo ? <h2>{getInitials( user?.data?.name || userInfo?.user?.name)}</h2> : " "}
              </div>
              <DownOutlined />
            </Space>
        </Dropdown>
      </div>

      {/* { userInfo && <div className="avatar-main">
      <Dropdown overlay={menu} >
            <Space>
              <div className="avatar-holder">
              { userInfo ? <h2>{getInitials(userInfo.user.name)}</h2> : <img src="/images/dashboard/navtar.png" alt="" />}
              </div>
              <DownOutlined />
            </Space>
        </Dropdown>
      </div> } */}
      </div>
    </div>
  );
}



   {/* <div className="dashboard-container">
      <div className="dashboard-container-main">
      <div className="dashboard-logo">
        <img src="images/dashboard/logo.png" alt="" />
      </div>
      <div className="dashboard-menu">
        <Link style={{ textDecoration: "none" }} to="/">
          Home
        </Link>
        <Link style={{ textDecoration: "none" }} to="#">
          Counselling
        </Link>
        <Link style={{ textDecoration: "none" }} to="#">
          Community
        </Link>
        <Link style={{ textDecoration: "none" }} to="3">
          About Us
        </Link>
        <Dropdown overlay={menu}>
          <Link style={{ textDecoration: "none" }} to="#">
            <Space>
              Join Us
              <DownOutlined />
            </Space>
          </Link>
        </Dropdown>
      </div>
      </div>
    </div> */}

export default DashboardNav;
