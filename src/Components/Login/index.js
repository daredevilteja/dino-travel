import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Space } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import SignUp from "../SignUp";
import "./styles.css";

export default function Login(props) {
  const [visible, setVisible] = useState(false);

  const onCreate = (values) => {
    const newUser = {
      userName: values.username,
      email: values.email,
      dob: values.dob,
      password: values.password,
      sex: values.gender,
      country: values.country,
      phNum: values.phone ? Number(values.phone) : null,
    };

    props.signupHandler(newUser);
    setVisible(false);
  };
  const onFinish = (values) => {
    props.loginHandler(values.username, values.password);
  };

  return (
    <div
      style={{ width: `${window.innerWidth}`, height: `${window.innerHeight}` }}
      className={"login-container"}
    >
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          {/*<a className="login-form-forgot">Forgot password</a>*/}
        </Form.Item>

        <Form.Item>
          <Space direction={"horizontal"}>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            <Button
              type="primary"
              className="login-form-button"
              onClick={() => {
                setVisible(true);
              }}
            >
              SignUp
            </Button>
          </Space>
          <SignUp
            visible={visible}
            onCreate={onCreate}
            onCancel={() => {
              setVisible(false);
            }}
          />
        </Form.Item>
      </Form>
    </div>
  );
}
