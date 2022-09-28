import React from 'react'
import Head from 'next/head'
import ChatsessionComp from '../components/chatSession/chatsession'
// import DashboardNav from '../components/dashboard/dashboardNav/dashboardNav'

function ChatSession() {
  return (
    <div style={{overflow: "hidden"}} >
      <Head>
        <title>Anonymous Chat Room</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/blue-logo.png" />
      </Head>

      {/* <DashboardNav /> */}
      <ChatsessionComp />
    </div>
  )
}

export default ChatSession