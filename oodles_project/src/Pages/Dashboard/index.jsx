import React, { useEffect } from "react";
import { Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../Redux/action";
import { useNavigate } from "react-router-dom";
import TaskItems from "../../Components/TaskItems";

export default function Dashboard() {
  const { isLoading, tasks } = useSelector((store) => store);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  console.log(tasks);

  useEffect(() => {
    dispatch(getData);
  }, []);

  if (isLoading) {
    return <h1 className="loading-indicator">Loading...</h1>;
  }
  return (
    <div>
      <Typography.Title level={4}>Dashboard</Typography.Title>
      <div>
        {/* {tasks?.map((elem) => {
          return (
            <div data-testid="task-item" key={elem.id}>
              <TaskItems key={elem.id} {...elem} />
            </div>
          );
        })} */}
        <TaskItems />
      </div>
    </div>
  );
}
