import React, { useState, useEffect } from "react";
import bg from "../../../assets/imgs/bg3.svg";
import { auth } from "../../../Firebase";

const WelcomeUser = () => {
  // This function shows a text based on the time of the user
  const [timeOfDay, setTimeOfDay] = useState("");

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour >= 6 && currentHour < 12) {
      setTimeOfDay("Morning");
    } else {
      setTimeOfDay("Evening");
    }
  }, []);
  return (
    <div className="welcomeUser">
      <img src={bg} alt="" />
      <div>
        <h2>
          Good {timeOfDay === "Morning" ? "Morning" : "Evening"}
          <span>
            {" "}
            {auth.currentUser != null ? auth.currentUser.displayName : ""}
          </span>
        </h2>
        <p>Welcome to Rity</p>
      </div>
    </div>
  );
};

export default WelcomeUser;
