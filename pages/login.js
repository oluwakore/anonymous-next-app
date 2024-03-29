import React, { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { Icon } from "@iconify/react";
import {
  Button,
  Form,
  Input,
  message,
  Alert,
  notification,
  Divider,
} from "antd";
// import { login } from '../api/base';
import styles from "../styles/Login.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../core/actions/useractions/useractions";

// opens a notification based type passed
const openNotificationWithIcon = (type, msg, desc) => {
  notification[type]({
    message: msg,
    description: desc,
  });
};

export default function Login() {
  const [form] = Form.useForm();

  const router = useRouter();

  // const [loading, setLoading] = useState(false)
  // const [error, setError] = useState(null)

  const dispatch = useDispatch();

  // gets the userlogin redux state
  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      router.push("/dashboard");
      openNotificationWithIcon(
        "success",
        "Sign In",
        `Welcome ${userInfo.user.name}`
      );
    }
  }, [userInfo]);

  // runs when login button is clicked
  const onFinish = async (values) => {
    const { email, password } = values;
    dispatch(loginUser(email, password));
  };

  return (
    <div className={styles.loginContainer}>
      <Head>
        <title>Login to Anonymous Confidant</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/blue-logo.png" />
      </Head>

      <div className={styles.loginPic}>
        <img src="images/register/hero-image.jpg" alt=" " />
      </div>
      <div className={styles.loginMain}>
        <div className={styles.loginMainContainer}>
          <div>
            <h1 className={styles.topText}>LOGIN</h1>

            <div className={styles.formGoogle}>
              <div>
                <Icon fontSize={35} icon="flat-color-icons:google" />
              </div>
              <div>
                <p>LOGIN WITH GOOGLE</p>
              </div>
            </div>
            {/* <div className={styles.divider}>
              <h4>Or</h4>
            </div> */}
            <Divider className={styles.divider}>Or</Divider>
            <div className={styles.loginLower}>
              <Form
                layout="vertical"
                id="loginform"
                form={form}
                onFinish={onFinish}
              >
                <div className={styles.loginLowerMain}>
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your email",
                      },
                      {
                        type: "email",
                        message: "Please enter a valid email",
                      },
                    ]}
                  >
                    <Input placeholder="ENTER YOUR MAIL ADDRESS" />
                  </Form.Item>

                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please enter a valid password",
                      },
                      {
                        min: 8,
                        message: "password must be at least 8 characters",
                      },
                    ]}
                  >
                    <Input.Password placeholder="PASSWORD (MIN. 8 CHARACTER)" />
                  </Form.Item>
                </div>
                <div className={styles.forgotPasswordLink}>
                  <p>Forgot Password</p>
                </div>
                <Form.Item>
                  <div className={styles.formzButton}>
                    <Button
                      htmlType="submit"
                      loading={loading}
                      disabled={loading}
                    >
                      LOGIN
                    </Button>
                  </div>
                </Form.Item>
              </Form>
            </div>
            <div className={styles.formzEnd}>
              <div className={styles.formzEndQuestion}>
                <p>No account yet?</p>
              </div>
              <div className={styles.formzEndLink}>
                <Link style={{ textDecoration: "none" }} href="/register">
                  <p>CREATE ACCOUNT HERE</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
