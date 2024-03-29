import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  Button,
  Form,
  Input,
  message,
  Alert,
  Checkbox,
  notification,
  Divider,
} from "antd";
import { Icon } from "@iconify/react";
import Link from "next/link";
import styles from "../styles/Register.module.scss";
import { register } from "../api/base";

// opens a notification based type passed
const openNotificationWithIcon = (type, msg, desc) => {
  notification[type]({
    message: msg,
    description: desc,
  });
};

function Register() {
  const [form] = Form.useForm();

  const router = useRouter();
  // state for loading when user registration is ongoing
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({
    password: "",
  });

  // stores error message
  const [error, setError] = useState(null);

  // runs when register button is clicked
  const onFinish = async (values) => {
    const { name, username, email, password } = values;
    setLoading(true);

    setError(null);

    const newErrors = { ...errors };

    if (Object.values(newErrors).every((item) => item === "")) {
      try {
        const res = await register({
          name,
          email,
          password,
        });
        // console.log(res.data);
        setLoading(false);
        if (res.data.status === "success") {
          openNotificationWithIcon(
            "success",
            "Register",
            "Registration was successful, login to continue."
          );
          router.push("/login");
        } else {
          const errors = res.data.message;
          setError(errors);
        }
      } catch (error) {
        setLoading(false);
        // console.log(error);
        if (error?.response?.data) {
          // console.log(error.response.data);
        } else {
          message.error("Something went wrong.");
        }
      }
    }
  };

  // runs when registration fails
  const onFinishFailed = (errorInfo) => {
    console.error(errorInfo);
  };

  return (
    <div className={styles.registerContainer}>
      <Head>
        <title>Register for Anonymous Confidant</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/blue-logo.png" />
      </Head>

      <div className={styles.registerImg}>
        <img src="images/register/hero-image.jpg" alt="" />
      </div>
      <div className={styles.registerMain}>
        <div className={styles.registerMainContainer}>
          {error !== null && (
            <div className={styles.errorHolder}>
              <Alert
                message={error}
                type="error"
                closable
                onClose={() => {
                  setError(null);
                }}
              />
            </div>
          )}
          <div className={styles.registerFormPart}>
            <h1 className={styles.topText}>Create Account</h1>
            <div>
              <Form
                layout="vertical"
                id="registerform"
                form={form}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Form.Item
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your username",
                    },
                  ]}
                >
                  <Input placeholder="ENTER YOUR USERNAME" />
                </Form.Item>

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

                <Form.Item
                  name="confirmPassword"
                  dependencies={["password"]}
                  rules={[
                    {
                      required: true,
                      message: "Please re-enter your password!",
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          "The two passwords did not match"
                        );
                      },
                    }),
                  ]}
                >
                  <Input.Password placeholder="CONFIRM PASSWORD" />
                </Form.Item>

                <div className={styles.checkboxPart}>
                  <Form.Item
                    name="agreement"
                    valuePropName="checked"
                    rules={[
                      {
                        validator: (_, value) =>
                          value
                            ? Promise.resolve()
                            : Promise.reject(
                                "To proceed, you need to agree with our terms and conditions"
                              ),
                      },
                    ]}
                  >
                    <Checkbox>
                      {" "}
                      I agree with the <b>Privacy Policy</b> and{" "}
                      <b>Terms & Conditions</b>
                    </Checkbox>
                  </Form.Item>
                </div>
                <Form.Item>
                  <div className={styles.formzButton}>
                    <Button
                      htmlType="submit"
                      loading={loading}
                      disabled={loading}
                    >
                      CREATE ACCOUNT
                    </Button>
                  </div>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
        <Divider className={styles.divider}>Or</Divider>
        <div className={styles.formGoogle}>
          <div className={styles.formGoogleIcon}>
            <Icon fontSize={32} icon="flat-color-icons:google" />
          </div>
          <div>
            <p>CREATE ACCOUNT WITH GOOGLE</p>
          </div>
        </div>
        <div className={styles.formzEnd}>
          <div className={styles.formzEndQuestion}>
            <p>Already have an account?</p>
          </div>
          <div className={styles.formzEndLink}>
            <Link style={{ textDecoration: "none" }} href="/login">
              <p>LOGIN HERE</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
