import React from "react";
import { Space, Avatar, Typography } from "antd";

export default function TaskItems(prop) {
  return (
    <div
      style={{ display: "flex", border: "1px dotted grey", padding: " 18px" }}
    >
      <div style={{ display: "flex" }}>
        <img
          src={prop.photo.url}
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
          <p>{prop.deviceid}</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h5>Lat : </h5>
          <p> {prop.lat}</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h5>Log :</h5>
          <p>{prop.log}</p>
        </div>
      </div>
    </div>
  );
}

//{ id, deviceid, photo, lat, log }
