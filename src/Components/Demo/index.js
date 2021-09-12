import React, { useState } from "react";
import { Form, Select, Button, Typography } from "antd";
import { Table, Space } from "antd";
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
  const columns = [
    {
      title: "Start Location",
      dataIndex: "startPoint",
      key: "start",
    },
    {
      title: "Destination",
      dataIndex: "destination",
      key: "destination",
    },
    {
      title: "Dino",
      dataIndex: "dino",
      key: "dino",
    },
    {
      title: "Start Time",
      key: "startTime",
      dataIndex: "startTime",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Button>Finish</Button>
          <Button danger>Cancel</Button>
        </Space>
      ),
    },
  ];

  const [form] = Form.useForm();
  const [dataObj, setDataObj] = useState({});
  const [data, setData] = useState([]);

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    const newObj = {
      startPoint: values.startPoint,
      destination: values.endPoint,
      dino: values.dino,
      startTime: today.toUTCString(),
    };
    setDataObj({ ...newObj });
    data.push(newObj);
    setData([...data]);
  };

  return (
    <>
      <div
        style={{
          width: 80 + "vw",
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

            <Form.Item
              name="dino"
              label="Pick your Dino"
              rules={[
                {
                  required: true,
                  message: "Please select your dino for the ride!",
                },
              ]}
            >
              <Select placeholder="select your dino">
                <Option value="tRex">T-Rex</Option>
                <Option value="ankylosauras">Ankylosauras</Option>
                <Option value="brachiosaurus">Brachiosaurus</Option>
                <Option value="pterosaur">Pterosaur(flying)</Option>
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
