import React from "react";
import Navbar from "../Navbar/Navbar";
import navData from "../Navbar/navData";
import blop from "../../assets/imgs/blop.svg";
import logo from "../../assets/imgs/logowebsite.png";
import Features from "./Features";
import Feedback from "./Feedback";
import About from "./About";
import HomPage from "./HomPage";

const LandingPage = () => {
  return (
    <div className="landingPage">
      <Navbar links={navData[0]} />
      <img src={logo} className="logo" alt="" />
      <img src={blop} className="blop" />
      <HomPage />
      <About />
      <Features />
      <Feedback />
    </div>
  );
};

export default LandingPage;
