import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
// import Image from 'next/image'
// import styles from '../styles/Home.module.scss'

import { logoutUser } from "../core/actions/useractions/useractions";
import React, { useEffect } from "react";
import Landing from "../components/Home/Landing/Landing";
import Therapy from "../components/Home/Therapy/Therapy";
import Share from "../components/Home/Share/Share";
import Thought from "../components/Home/Thought/Thought";
import Counsel from "../components/Home/Counsel/Counsel";
import Philosophy from "../components/Home/Philosophy/Philosophy";
import People from "../components/Home/People/People";
import Footer from "../components/Footer/Footer";

export default function Home() {
  const dispatch = useDispatch();

  // gets the userlogin redux state
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      dispatch(logoutUser());
    }
  }, []);

  return (
    <div style={{ overflow: "hidden" }}>
      <Head>
        <title>Home of Anonymous Confidant</title>
        <meta
          name="description"
          content="Generated by create next app"
          key="desc"
        />
        <link rel="icon" href="/blue-logo.png" />
      </Head>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="view"
        />
      </Head>

      <>
        {/* Homepage components */}
        <Landing />
        <Therapy />
        <Share />
        <Thought />
        <Counsel />
        <Philosophy />
        <People />
        <Footer />
      </>
    </div>
  );
}
