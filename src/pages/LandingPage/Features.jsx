import React from "react";
import prsn from "../../assets/imgs/person.svg";
import lct from "../../assets/imgs/location.svg";
import str from "../../assets/imgs/star.svg";
import scr from "../../assets/imgs/secure.svg";
import bg from "../../assets/imgs/bg2.svg";

const Features = () => {
  return (
    <section id="features" className="features">
      <img src={bg} className="bg2" />
      <div className="card glass">
        <img src={prsn} />
        <h2>User-friendly interface</h2>
        <p>
          Rity should be easy to use for people of all ages and abilities. The
          interface should be clean and uncluttered, and the navigation should
          be intuitive.
        </p>
      </div>
      <div className="card glass">
        <img src={lct} />
        <h2>Global community</h2>
        <p>
          Rity should be a global community where people from all over the world
          can connect with each other. This could be achieved by providing
          translation tools and by encouraging users to share their thoughts and
          ideas about a wide range of topics.
        </p>
      </div>
      <div className="card glass">
        <img src={str} />
        <h2>Opportunities for learning</h2>
        <p>
          Rity should be a platform where people can learn from each other. This
          could be achieved by providing users with access to educational
          resources, such as articles, videos, and podcasts.
        </p>
      </div>
      <div className="card glass">
        <img src={scr} />
        <h2>Secure platform</h2>
        <p>
          Rity should be a secure platform for sharing thoughts and ideas. Users
          should be able to trust that their privacy will be respected, and that
          their data will be safe from unauthorized access.
        </p>
      </div>
    </section>
  );
};

export default Features;
