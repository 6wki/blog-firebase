import React from "react";
import { Link } from "react-router-dom";
import arrow from "../../assets/imgs/arrow.svg";
import lfth from "../../assets/imgs/hand-left.svg";
import rth from "../../assets/imgs/hand-right.svg";

const HomPage = () => {
  return (
    <main id="home" className="home">
      <div>
        <h1>Rity</h1>
        <h2>The Whole World in One Party</h2>
        <p>RITY</p>
        <img src={lfth} className="leftHomepage" />
        <img src={rth} className="rightHomepage" />
        <Link to="/login">
          <button className="buttonLanding">
            <span>Join Now</span>
          </button>
        </Link>
        <img src={arrow} className="arrow" />
      </div>
    </main>
  );
};

export default HomPage;
