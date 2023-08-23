import React from "react";
import { Space, Avatar, Typography } from "antd";

export default function TaskItems({ deviceid, photo, lat, log }) {
  return (
    <div
      style={{ display: "flex", border: "1px dotted grey", padding: " 18px" }}
    >
      <div style={{ display: "flex" }}>
        <img
          src={photo}
          alt="XYZ"
          width="250px"
          style={{ borderRadius: "8px" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: " 0 18px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h5>Device Id: </h5>
          <p>{deviceid}</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h5>Lat : </h5>
          <p> {lat}</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h5>Log :</h5>
          <p>{log}</p>
        </div>
      </div>
    </div>
  );
}

//{ id, deviceid, photo, lat, log }
