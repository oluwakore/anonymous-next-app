import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../core/actions/useractions/useractions";
import moment from "moment";
import ProfileTabs from "../components/profile/profileTabs/ProfileTabs";
import { getDetails } from "../api/base";
import { message } from "antd";
import { InfinitySpin } from "react-loader-spinner";

function Profile() {
  const dispatch = useDispatch();

  // const [loading, setLoading] = useState(false)

  // gets the userlogin redux state
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // gets the user details redux state
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error } = userDetails;
  // console.log(userInfo)

  // the id for the logged in user
  const loggedUserId = userInfo?.user?.id;

  // the token for the logged in user
  const loggedUserToken = userInfo?.token;

  useEffect(() => {
    dispatch(getUserDetails(loggedUserId, loggedUserToken));
  }, [dispatch]);

  return (
    <div>
      <Head>
        <title>Your Info Page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/blue-logo.png" />
      </Head>

      {error && message.error(error)}
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          {" "}
          <InfinitySpin width="200" color="#0e0b8b" />{" "}
        </div>
      ) : (
        // component for user profile
        <ProfileTabs userToken={loggedUserToken} />
      )}
    </div>
  );
}

export default Profile;
