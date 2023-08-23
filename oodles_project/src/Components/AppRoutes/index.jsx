import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../../Pages/Dashboard";
import Form from "../../Pages/Form";
import PhotoPage from "../PhotoPage";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/form" element={<Form />} />
        <Route path="/photo" element={<PhotoPage />} />
      </Routes>
    </>
  );
}
