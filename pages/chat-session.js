import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import ChatsessionComp from "../components/chatSession/chatsession";
import { useDispatch, useSelector } from "react-redux";

import { io } from "socket.io-client";
import { REACT_APP_BASE_URL } from "../env";
import { getMessages } from "../api/base";
// import DashboardNav from '../components/dashboard/dashboardNav/dashboardNav'

function ChatSession() {
  // const socket = useRef(io(REACT_APP_BASE_URL))

  const [iden, setIden] = useState(null);

  // gets the userlogin redux state
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // the id for the logged in user
  const loggedUserId = userInfo?.user?.id;

  // the token for the logged in user
  const loggedUserToken = userInfo?.token;

  // console.log(loggedUserToken)

  // gets the user details redux state
  const userDetails = useSelector((state) => state.userDetails);

  const {
    user: { data },
  } = userDetails;

  // console.log(data?.activeSessions[3]._id)

  const [messageObj, setMessageObj] = useState({
    messageText: "",
    messageType: "text",
  });

  const getChatSession = async (i) => {
    try {
      const res = await getMessages(i, loggedUserToken);

      // console.log(res.data)
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <Head>
        <title>Anonymous Chat Room</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/blue-logo.png" />
      </Head>

      {/* <DashboardNav /> */}

      {/* chat session component */}
      <ChatsessionComp />
    </div>
  );
}

export default ChatSession;
