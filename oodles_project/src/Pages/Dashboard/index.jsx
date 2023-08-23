import React, { useEffect } from "react";
import { Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import TaskItems from "../../Components/TaskItems";

export default function Dashboard() {
  const { tasks } = useSelector((store) => store);

  return (
    <div>
      <Typography.Title level={4}>Dashboard</Typography.Title>
      <div>
        {tasks?.map((elem) => {
          return (
            <div key={elem.id}>
              <TaskItems key={elem.id} {...elem} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
