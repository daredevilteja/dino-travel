import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Table, Typography } from "antd";

const { Title } = Typography;

export default function MyTravels() {
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
      title: "End Time",
      key: "endTime",
      dataIndex: "endTime",
    },
  ];

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dino-travel-be.herokuapp.com/myTravels", {
      method: "GET",
      credentials: "include",
    })
      .then((r) => r.json())
      .then((r) => setData([...r]));
  }, []);

  return (
    <div>
      <Title>Ongoing Rides</Title>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}
