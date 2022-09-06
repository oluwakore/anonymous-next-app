import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from 'moment'
import styles from "./profileTabs.module.scss";
import { Empty, notification, Alert, message } from "antd";
import  {Bars} from 'react-loader-spinner'
import {
  ProfileOutlined,
  ScheduleOutlined,
  BookOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { updateDetails, updatePasword } from "../../../api/base";
import { updateUserProfile, logoutUser } from "../../../core/actions/useractions/useractions";
import { useRouter } from "next/router";
import Link from "next/link";



const openNotificationWithIcon = (type, msg, desc) => {
  notification[type]({
    message: msg,
    description: desc,
  });
};

function ProfileTabs({ userToken }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [oldpassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setComfirmPassword] = useState("");
  const [showPassError, setShowPassError] = useState(false)
  const [showPassLoading, setShowPassLoading] = useState(false)

  const router = useRouter()

  const [addTypes, setAddTypes] = useState([
    {
      id: "in-1",
      title: "My Profile",
      icon: <ProfileOutlined style={{ fontSize: "1.8rem" }} />,
      active: true,
    },
    {
      id: "in-2",
      title: "My Sessions",
      icon: <ScheduleOutlined style={{ fontSize: "1.8rem" }} />,
      active: false,
    },
    {
      id: "in-3",
      title: "My Stories",
      icon: <BookOutlined style={{ fontSize: "1.8rem" }} />,
      active: false,
    },
  ]);

  const switchTabs = (valueIndex) => {
    const newTabs = [...addTypes];
    newTabs.forEach((item, index) => {
      item.active = false;
      if (valueIndex === index) {
        item.active = true;
      }
    });
    setAddTypes(newTabs);
  };

  const dispatch = useDispatch()

  const userDetails = useSelector((state) => state.userDetails)

  const { loading, error, user } = userDetails

  
  const userUpdateProfile = useSelector((state) => state.userUpdateProfile)

  const { loading: updateLoading, userInfo} = userUpdateProfile

  const logoutHandler = () => {
    router.push('/')
    dispatch(logoutUser())
    openNotificationWithIcon('success', 'Sign Out', 'Logout was succesful.')
    console.log('Logged Out')
  }
   

  useEffect(() => {
    if (user) {
      setName( userInfo ? userInfo?.data?.name : user?.data?.name );
      setEmail( userInfo ? userInfo?.data?.email :  user?.data?.email);
    }
  }, [dispatch, user]);

  const getInitials = (nameString) => {
    if (nameString === undefined){
      return null
    } else {
      const fullName = nameString.split(" ")
      const initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
      const result = initials.toUpperCase();
  
      return result
    }
  }

  const handleUpdateDetails = (e) => {
    e.preventDefault()
    dispatch(updateUserProfile(user?.data?.id, {name, email}, userToken))
    message.success(`Update details ${user.status}`)
  }

  const handleUpdatePassword = async(e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setShowPassError(true)
    }
    try{
 
      setShowPassLoading(true)
     const res = await updatePasword(user?.data?.id, {oldpassword, password}, userToken)

    //  console.log(res.data)
     setShowPassLoading(false)
     message.success(`${res.data.message}`)
     setOldPassword('')
     setPassword('')
     setComfirmPassword('')
    } catch(error) {
      setShowPassLoading(false)
      // console.error(error)
    }
  }
  

  return (
      <>
      {/* {
        user === undefined && <h1>Unable to load resource</h1>
      } */}
    { loading ? <h1>Loading.....</h1> : user === undefined ? <> <h1>Unable to load resource</h1> <Link href="/login"> Go to Login Page</Link></>  :
    <div className={styles.topContainer}>
      <div className={styles.sidebar}>
        <div className={styles.coverMain}>
          <div className={styles.avatarName}>
            <h1> {getInitials( userInfo ? userInfo?.data?.name : user?.data?.name )} </h1>
          </div>
          <div className={styles.avatarNameDetails}>
            <h2> { userInfo ? userInfo?.data?.name : user?.data?.name } </h2>
            <p> Joined {moment(user?.data?.createdAt).format("LL")} </p>
          </div>
          <div className={styles.menuList}>
            {addTypes.map((item, index) => (
              <h1
                className={[
                  styles.card,
                  item.active ? styles.cardActive : "",
                ].join(" ")}
                key={item.id}
                onClick={() => {
                  switchTabs(index);
                }}
              >
                <span>{item.icon}</span> {item.title}
              </h1>
            ))}
          </div>
          <div className={styles.logoutPart} onClick={logoutHandler}>
            <h2>
              {" "}
              <span>
                {" "}
                <LogoutOutlined />
              </span>{" "}
              Log Out
            </h2>
          </div>
          `{" "}
        </div>
      </div>

      {addTypes[0].active && (
        <div className={styles.comps}>
          <div className={styles.compsCover}>
          <div className={styles.detailsCover}>
            {updateLoading ? <div style={{ margin: "auto", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}> <Bars 
            height="100"
            width="100"
            color="#0e0b8b"
            /> <p> Updating details... </p> </div>: <>
                    <h1>Personal Details</h1>
            <form className={styles.formCover} onSubmit={handleUpdateDetails} >
              <div>
                <div className={styles.fillPart}>
                  <label>Your Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <div className={styles.fillPart}>
                  <label>E-mail Address</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className={styles.formCover1Button}>
                <button type="submit">Update Details</button>
              </div>
            </form>
            </>}
          </div>

          <div  className={styles.detailsCover}>
          { showPassError &&   <Alert
          message="Passwords do not match!"
          type="error"
          closable
          onClose={()=> setShowPassError(false)}
    /> }
    {
      showPassLoading ? <div style={{ margin: "auto", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}> <Bars 
      height="100"
      width="100"
      color="#0e0b8b"
      /> <p> Updating password... </p> </div>: <>
                 <h1>Update Your Password</h1>
            <form className={styles.formCover} onSubmit={handleUpdatePassword}>
              <div>
                
                <div className={styles.fillPart}>
                  <label>Enter old password</label>
                  <input
                    type="password"
                    required
                    value={oldpassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <div className={styles.fillPart}>
                  <label>New Password</label>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <div className={styles.fillPart}>
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setComfirmPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className={styles.formCover1Button}>
                <button type="submit">Update password</button>
              </div>
            </form>
      </>
    }
          </div>
          </div>
        </div>
      )}

      {addTypes[1].active && (
        <div className={styles.comps}>
          {
            user?.data?.activeSessions.length === 0 ? <Empty
            description={
              <span>
                You don&apos;t have any sessions yet.
              </span>
            }
            /> : user?.data?.activeSessions.map((item) => (
              <div> {item.title} </div>
            ))
          }
        </div>
      )}

      {addTypes[2].active && (
        <div className={styles.comps}>
            {
            user?.data?.stories.length === 0 ? <Empty
            description={
              <span>
                You haven&apos;t created any stories yet.
              </span>
            }
            /> : user?.data?.activeSessions.map((item) => (
              <div> {item.title} </div>
            ))
          }
        </div>
      )}
    </div>
    }
    </>
  );
}

export default ProfileTabs;

{
  /* <div>
       
      

        {
            addTypes[0].active && <div> <h1>Connect Tab </h1></div>
        }

        {
            addTypes[1].active && <div> <h1>Listings Tab</h1></div>
        }
    </div> */
}

//   const [addTypes, setAddTypes] = useState([
//     {
//         id: 'in-1',
//         title: 'Connect',
//         active: true
//     },
//     {
//         id: 'in-1',
//         title: 'Listings',
//         active: false
//     }
//   ])

{
  /* <div>
<form>
  <div>
    <div>
      <label>Name</label>
      <input
        type="text"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  </div>

  <div>
    <div>
      <label>Username</label>
      <input
        type="text"
        required
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    </div>
  </div>

  <div>
    <div>
      <label>E-mail Address</label>
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
  </div>

  <div>
    <div>
      <label></label>
      <input
        type="password"
        required
        value={oldPassword}
        onChange={(e) => setOldPassword(e.target.value)}
      />
    </div>
  </div>

  <div>
    <div>
      <label>New Password</label>
      <input
        type="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
  </div>

  <div>
    <div>
      <label>Confirm Password</label>
      <input
        type="password"
        required
        value={confirmPassword}
        onChange={(e) => setComfirmPassword(e.target.value)}
      />
    </div>
  </div>
</form>
</div> */
}
