import React from "react";
import headline from "../../assets/imgs/fdbackHeadline.svg";
import freedom from "../../assets/imgs/freedom.svg";
import lfth from "../../assets/imgs/hand-left.svg";
import rth from "../../assets/imgs/hand-right.svg";
import bg3 from "../../assets/imgs/bg3.svg";
import infoBg from "../../assets/imgs/infoBg.svg";

const Feedback = () => {
  return (
    <section id="feedback" className="feedback sec">
      <img src={bg3} className="bgFd" />
      <div className="feedbackContainer glass splitContainer">
        <div className="leftFd split">
          <img src={headline} className="hdFdback" />
          <img src={freedom} className="freedom" />
          <img src={lfth} className="leftHand" />
          <img src={rth} className="rightHand" />
          <div className="circles">
            <div className="circle c1"></div>
            <div className="circle c2"></div>
            <div className="circle c3"></div>
          </div>
        </div>
        <div className="rightFd split">
          <p></p>
          <img src={infoBg} className="infoBg" />
        </div>
      </div>
    </section>
  );
};

export default Feedback;
