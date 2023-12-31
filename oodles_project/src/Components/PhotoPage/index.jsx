import { Button, Space } from "antd";

import React, { useRef, useState } from "react";
import Webcam from "react-webcam";

const videoConstraints = {
  width: 300,
  facingMode: "environment",
};

export default function PhotoPage({ photo, setImage }) {
  const webcamRef = useRef(null);
  const [url, setUrl] = useState(null);

  const capturePhoto = React.useCallback(async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setUrl(imageSrc);
  }, [webcamRef]);

  const onUserMedia = (e) => {};

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        margin: "18px",
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
