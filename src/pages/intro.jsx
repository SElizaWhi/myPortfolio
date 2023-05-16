import React from "react";
import { Link } from "react-router-dom";

function Intro () {
  return (
    <section className="intro-section">
      <div className="container">
        <h1 className="intro-heading">Hi, I'm Sophie White</h1>
        <h2 className="intro-subheading">Junior Full Stack Web Developer</h2>
        <p className="intro-description">
          I'm passionate about building innovative and user-friendly web
          applications using the latest technologies. With hands-on experience
          in front-end and back-end development, I have a deep understanding of
          the entire web development process, from conception to deployment.
        </p>
        <Link to="/projects"><button className="cta-button">View My Work</button></Link>
      </div>
    </section>
  );
};

export default Intro;
