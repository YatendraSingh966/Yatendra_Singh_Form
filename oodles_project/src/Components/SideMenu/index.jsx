import React from "react";
import { Menu } from "antd";
import { AppstoreAddOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export default function SideMenu() {
  const navigate = useNavigate();

  return (
    <div className="SideMenu">
      <Menu
        onClick={(items) => {
          navigate(items.key);
        }}
        items={[
          { label: "Dashboard", icon: <AppstoreAddOutlined />, key: "/" },
          { label: "Form", icon: <UserOutlined />, key: "/form" },
        ]}
      ></Menu>
    </div>
  );
}
