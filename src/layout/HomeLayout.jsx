import React from "react";
import Home from "../pages/home/Home";
import { Navbar } from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
// import "./style.css";

const HomeLayout = (props) => {
  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      {props.children}
      {/* <Footer /> */}
    </div>
  );
};

export default HomeLayout;
