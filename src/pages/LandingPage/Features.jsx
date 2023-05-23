import React from "react";
import prsn from "../../assets/imgs/person.svg";
import lct from "../../assets/imgs/location.svg";
import str from "../../assets/imgs/star.svg";
import scr from "../../assets/imgs/secure.svg";
import bg from "../../assets/imgs/bg2.svg";

const Features = () => {
  return (
    <section id="features" className="features sec">
      <img src={bg} className="bg2" />
      <div>
        <div className="card glass">
          <img src={prsn} />
          <h2>User-friendly interface</h2>
          <p>
            Rity is a user-friendly platform, I work so hard to make your
            experience enjoyable.
          </p>
        </div>
        <div className="card glass">
          <img src={lct} />
          <h2>Global community</h2>
          <p>
            Rity is an open app for everyone, you will find all the countries
            and cities and villages in one place.
          </p>
        </div>
        <div className="card glass">
          <img src={str} />
          <h2>Opportunities for learning</h2>
          <p>
            Due the differences of cultures & experiences here you will be able
            to learn a lot from others and enhance your knowledge.
          </p>
        </div>
        <div className="card glass">
          <img src={scr} />
          <h2>Secure platform</h2>
          <p>
            This is a very secure platform, the data of our users is in a safe
            place plus the website is empty from any bugs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
