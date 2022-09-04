import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from 'moment'
import styles from "./profileTabs.module.scss";
import {
  ProfileOutlined,
  ScheduleOutlined,
  BookOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

function ProfileTabs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setComfirmPassword] = useState("");

  const [addTypes, setAddTypes] = useState([
    {
      id: "in-1",
      title: "My Profile",
      icon: <ProfileOutlined style={{ fontSize: "2rem" }} />,
      active: true,
    },
    {
      id: "in-2",
      title: "My Sessions",
      icon: <ScheduleOutlined style={{ fontSize: "2rem" }} />,
      active: false,
    },
    {
      id: "in-3",
      title: "My Stories",
      icon: <BookOutlined style={{ fontSize: "2rem" }} />,
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

  const { data } = user

  useEffect(() => {
    if (user) {
      setName(data.name);
      setEmail(data.email);
    }
  }, [dispatch, user]);

  const getInitials = (nameString) => {
    const fullName = nameString.split(" ")
    const initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
    const result = initials.toUpperCase();

    return result
  }

  return (
      <>
    { loading ? <h1>Loading...</h1> :
    <div className={styles.topContainer}>
      <div className={styles.sidebar}>
        <div className={styles.coverMain}>
          <div className={styles.avatarName}>
            <h1> {getInitials(data.name)} </h1>
          </div>
          <div className={styles.avatarNameDetails}>
            <h2> {data.name} </h2>
            <p> Joined {moment(data.createdAt).format("LL")} </p>
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
          <div className={styles.logoutPart}>
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
            <h1>Personal Details</h1>
            <form className={styles.formCover}>
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
                <button>Update Details</button>
              </div>
            </form>
          </div>

          <div  className={styles.detailsCover}>
            <h1>Update Your Password</h1>

            <form className={styles.formCover}>
              <div>
                <div className={styles.fillPart}>
                  <label>Enter old password</label>
                  <input
                    type="password"
                    required
                    value={oldPassword}
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
                <button>Update password</button>
              </div>
            </form>
          </div>
          </div>
        </div>
      )}

      {addTypes[1].active && (
        <div className={styles.comps}>
          {" "}
          <h1>Sessions Tab</h1>
        </div>
      )}

      {addTypes[2].active && (
        <div className={styles.comps}>
          {" "}
          <h1>Stories Tab</h1>
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
