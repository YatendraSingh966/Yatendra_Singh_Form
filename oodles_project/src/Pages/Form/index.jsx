import React, { useEffect, useState } from "react";
import { Button, Space, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import PhotoPage from "../../Components/PhotoPage";
import { addTask } from "../../Redux/action";
import { useDispatch } from "react-redux";

export default function Form() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = {
    deviceid: "",
    photo: "",
    lat: "",
    log: "",
  };
  const [task, setTask] = useState(data);

  const handleClick = (e) => {
    e.preventDefault();
    console.log(task);
    dispatch(addTask(task));
    navigate("/");
  };

  return (
    <div
      style={{
        width: "1000px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "28px 18px",
      }}
    >
      <Typography.Title level={4}>Form</Typography.Title>
      <Space style={{ display: "flex", margin: "28px 0 0 0" }}>
        <PhotoPage setImage={setTask} />
      </Space>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "28px",
        }}
      >
        <input
          type="text"
          required
          name="macId"
          placeholder="Please fill IP Address"
          style={{
            width: "300px",
            height: "28px",
            borderRadius: "8px",
            border: "1px solid grey",
            margin: "28px 0 0 0",
            padding: "8px",
          }}
          onChange={(e) =>
            setTask((prev) => ({ ...prev, deviceid: e.target.value }))
          }
        ></input>
        <input
          type="text"
          required
          name="Latitude"
          placeholder="Please fill Latitude"
          style={{
            width: "300px",
            height: "28px",
            borderRadius: "8px",
            border: "1px solid grey",
            margin: "28px 0 0 0",
            padding: "8px",
          }}
          onChange={(e) =>
            setTask((prev) => ({ ...prev, lat: e.target.value }))
          }
        ></input>
        <input
          type="text"
          required
          name="Longitude"
          placeholder="Please fill Longitude"
          style={{
            width: "300px",
            height: "28px",
            borderRadius: "8px",
            border: "1px solid grey",
            margin: "28px 0 0 0",
            padding: "8px",
          }}
          onChange={(e) =>
            setTask((prev) => ({ ...prev, log: e.target.value }))
          }
        ></input>
      </form>
      <Button onClick={handleClick} type="primary" size="large">
        Submit
      </Button>
    </div>
  );
}
