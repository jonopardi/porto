import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import ProjectDetail from "../pages/projectDetail/ProjectDetail";
import Home from "../pages/home/Home";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HomeLayout>
              <Home />
            </HomeLayout>
          }
        />
        <Route
          path="/projects/:id"
          element={
            <HomeLayout>
              <ProjectDetail />
            </HomeLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
export default Routers;
