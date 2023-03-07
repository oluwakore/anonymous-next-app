import React, { useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./adminlogin.module.scss";
import {
  Button,
  Form,
  Input,
  message,
  Alert,
  notification,
  Divider,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../core/actions/useractions/useractions";

// creates a notification for login
const openNotificationWithIcon = (type, msg, desc) => {
  notification[type]({
    message: msg,
    description: desc,
  });
};

function AdminLogin() {
  const [form] = Form.useForm();

  const router = useRouter();

  const dispatch = useDispatch();

  // gets the userlogin redux state
  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  // processes login for admin
  const onFinish = async (values) => {
    const { email, password } = values;
    dispatch(loginUser(email, password));
    if (userInfo.user._kind === "admin") {
      openNotificationWithIcon("success", "Sign In", `Welcome Admin`);
      router.push("/admin/dashboard");
    } else {
      message.error("you do not possess admin rights!");
    }
  };

  return (
    <div className={styles.compCover}>
      <div className={styles.compCoverHeader}>
        <img src={"/blue-logo.png"} alt="logo" className={styles.coverImg} />
        <p>Anonymous Confidant Admin</p>
      </div>
      <div>
        <Form layout="vertical" id="loginform" form={form} onFinish={onFinish}>
          <div>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please enter your email address",
                },
              ]}
            >
              <Input placeholder="ENTER EMAIL" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please enter a valid password",
                },
              ]}
            >
              <Input.Password placeholder=" ENTER PASSWORD" />
            </Form.Item>
          </div>
          <Form.Item>
            <div className={styles.formzButton}>
              <Button htmlType="submit" loading={loading} disabled={loading}>
                LOGIN
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default AdminLogin;
