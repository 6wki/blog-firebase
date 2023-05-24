import React from "react";
import headline from "../../assets/imgs/fdbackHeadline.svg";
import freedom from "../../assets/imgs/freedom.svg";
import lfth from "../../assets/imgs/hand-left.svg";
import rth from "../../assets/imgs/hand-right.svg";
import bg3 from "../../assets/imgs/bg3.svg";
import infoBg from "../../assets/imgs/infoBg.svg";
import gtInTouch from "../../assets/imgs/getintouch.svg";
import shape from "../../assets/imgs/shapeFdback.svg";

const Feedback = () => {
  return (
    <section id="feedback" className="feedback sec">
      <img src={bg3} className="bgFd" />
      <div className="feedbackContainer glass splitContainer">
        <div className="leftFd split">
          <img src={headline} className="hdFdback" />
          <img src={freedom} className="freedom" />
          <img src={lfth} className="leftHand handl" />
          <img src={rth} className="rightHand handr" />
          <div className="circles">
            <div className="circle c1"></div>
            <div className="circle c2"></div>
            <div className="circle c3"></div>
          </div>
        </div>
        <div className="rightFd split">
          <p>
            Your feedback means a lot to us so we can improve our website for
            you.
          </p>
          <form>
            <img src={gtInTouch} className="gtInTouch" />
            <label htmlFor="name">Name *</label>
            <input type="text" id="name" />
            <label htmlFor="email">Email address *</label>
            <input type="text" id="email" />
            <label htmlFor="message">Message *</label>
            <textarea type="text" id="message" />
            <button>LET'S TALK</button>
          </form>
          <img src={shape} className="shapeFdback" />
          <img src={infoBg} className="infoBg" />
        </div>
      </div>
    </section>
  );
};

export default Feedback;
