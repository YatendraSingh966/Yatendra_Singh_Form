import { Button, Space } from "antd";

import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import { useNavigate } from "react-router-dom";

const videoConstraints = {
  width: 300,
  facingMode: "environment",
};

export default function PhotoPage({ setImage }) {
  const navigate = useNavigate();
  const [disable, setDisable] = useState(false);
  const webcamRef = useRef(null);
  const [url, setUrl] = useState(null);

  const capturePhoto = React.useCallback(async () => {
    const imageSrc = webcamRef.current.getScreenshot();

    setUrl(imageSrc);
  }, [webcamRef]);
  // const showImage = () => {
  //   image = webRef.current.getScreenshot();
  // };

  const onUserMedia = (e) => {};

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Space>
        <Webcam
          style={{
            border: "2px solid green",
            borderRadius: "8px",
            width: "300px",
          }}
          ref={webcamRef}
          screenshotFormat="image/png"
          videoConstraints={videoConstraints}
          onUserMedia={onUserMedia}
        />
        {url && (
          <div
            style={{
              border: "2px solid red",
              borderRadius: "8px",
              width: "300px",
            }}
          >
            <img src={url} alt="Screen" />
          </div>
        )}
      </Space>
      <Space
        style={{ display: "flex", justifyContent: "center", marginTop: "28px" }}
      >
        <Button type="primary" onClick={() => capturePhoto()}>
          Capture
        </Button>
        <Button
          onClick={() => setImage((prev) => ({ ...prev, photo: { url } }))}
        >
          Save
        </Button>
      </Space>
    </div>
  );
}
