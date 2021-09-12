import React, { useState } from "react";
import { Form, Select, Button, Typography } from "antd";
import { Table, Tag, Space } from 'antd';
import "antd/dist/antd.css";
import "./styles.css";

const { Option } = Select;
const { Title } = Typography;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

export default function Demo() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <>
      <div
        style={{
          width: 90 + "vw",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <div className={"dino-container"}>
          <Title style={{ marginLeft: 10 + "vw", fontSize: 2 + "em" }}>
            Book a Dino
          </Title>
          <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            scrollToFirstError
          >
            <Form.Item
              name="startPoint"
              label="Your Start Point"
              rules={[
                {
                  required: true,
                  message: "Please select your starting point!",
                },
              ]}
            >
              <Select placeholder="select your starting point">
                <Option value="angorvat">Angorvat</Option>
                <Option value="pochinki">Pochinki</Option>
                <Option value="vikendi">Vikendi</Option>
                <Option value="sanhok">Sanhok</Option>
                <Option value="miramar">Miramar</Option>
                <Option value="prison">Prison</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="endPoint"
              label="Your Destination"
              rules={[
                {
                  required: true,
                  message: "Please select your destination!",
                },
              ]}
            >
              <Select placeholder="select your destination">
                <Option value="angorvat">Angorvat</Option>
                <Option value="pochinki">Pochinki</Option>
                <Option value="vikendi">Vikendi</Option>
                <Option value="sanhok">Sanhok</Option>
                <Option value="miramar">Miramar</Option>
                <Option value="prison">Prison</Option>
              </Select>
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                Book
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <div>
        <Title>Ongoing Rides</Title>
        <Table columns={columns} dataSource={data} />
      </div>
    </>
  );
}



const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',

  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

