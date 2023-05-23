import React from "react";

const Feedback = () => {
  return (
    <section id="feedback" className="feedback sec">
      <form className="feedbackCard glass">
        <label htmlFor="nameLogin">Full Name</label>
        <input
          type="text"
          id="nameLogin"
          placeholder="Enter your name"
          required
        />
        <label htmlFor="emailLogin">Email</label>
        <input
          type="text"
          id="emailLogin"
          placeholder="Enter your name"
          required
        />
        <label htmlFor="feedbackArea">Your Feedback</label>
        <textarea
          type="text"
          id="feedbackArea"
          placeholder="This is the coolest website!!"
          required
        />
      </form>
    </section>
  );
};

export default Feedback;
