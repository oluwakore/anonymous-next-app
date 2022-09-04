import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/router'
import { Icon } from "@iconify/react";
import {
  Button,
  Form,
  Input,
  message,
  Alert,
  notification,
  Divider
} from "antd";
// import { login } from '../api/base';
import styles from "../styles/Login.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../core/actions/useractions/useractions";

const openNotificationWithIcon = (type, msg, desc) => {
  notification[type]({
    message: msg,
    description: desc,
  });
};

export default function Login() {
  const [form] = Form.useForm()
   
  const router = useRouter()

  // const [loading, setLoading] = useState(false)
  // const [error, setError] = useState(null)

  const dispatch = useDispatch()

   const userLogin = useSelector((state) => state.userLogin)
   const  { error, loading, userInfo } = userLogin

   useEffect(() => {
    if(userInfo) {
      router.push('/dashboard')
      openNotificationWithIcon('success', 'Sign In', `Welcome ${userInfo.user.name}`)
    }
   
   }, [userInfo]) 

/** 
   * Form submission
   * @param values Object 
   */

const onFinish = async (values) => {
  const {email, password} = values
  dispatch(loginUser(email, password))
 
  // setError(null)
  // setLoading(true)
  // try {
  //   const res = await login({
  //     ...values
  //   })
  //   // setLoading(false)
  //   if (res.data.message === "success") {
  //     openNotificationWithIcon('success', 'Sign In', 'Login was succesful.')
  //     navigate('/dashboard')
  //   }
  // } catch (error) {
  //   // setLoading(false)
  //   console.log(error)
  //   if (error?.response?.data) {
  //     console.log(error.response.data)
  //     const errors = error.response.data.msg
  //     // setError(errors)
  //   }
  // }
}

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginPic}>
        <img src="images/register/hero-image.jpg" alt=" " />
      </div>
      <div className={styles.loginMain}>
      {/* {
            error &&
            <div className={styles.errorHolder}>
              <Alert
                message={error}
                type="error"
                closable
                showIcon
                onClose={() => {
                  // setError(null)
                }}
              />
              </div>
          } */}
{/* 
          {
            loading && <>
            <h2>Loading...</h2>
            </>
          } */}
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
            <Divider className={styles.divider} >
              Or
            </Divider>
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
                <p>Don&apos;t yet have an account?</p>
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
