import React, { useEffect } from "react";
import { Typography } from "antd";
import { useSelector } from "react-redux";
import TaskItems from "../../Components/TaskItems";

export default function Dashboard() {
  const { tasks } = useSelector((store) => store);

  return (
    <div>
      <Typography.Title level={4}>Dashboard</Typography.Title>
      <div>
        {tasks?.map((elem, index) => {
          return <TaskItems key={index} {...elem} />;
        })}
      </div>
    </div>
  );
}
