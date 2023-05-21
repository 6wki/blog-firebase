import React from "react";
import earth from "../../assets/imgs/earth.svg";
import logo from "../../assets/imgs/logowebsite.png";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="firstPart">
        <h2>WHAT IS RITY</h2>
        <img src={logo} />
      </div>
      <div className="secondPart glass">
        <img src={earth} alt="" />
        <p>
          Rity is a social media platform that allows users to share their
          thoughts and ideas freely. It is a place where people can connect with
          others from all over the world and learn about different perspectives.
          Rity has the potential to be a powerful tool for communication and
          learning.
        </p>
      </div>
    </section>
  );
};

export default About;
