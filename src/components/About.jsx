import React from "react";
import img from "../Assets/IMG_2.jpg";
import "../Styles/About.css";
const About = () => {
  return (
    <section id="about" className="container">
      <h2>About me</h2>
      <div className="about">
        <img id="about_img" src={img} alt="Rethik" data-aos="fade-right" />
        <p className="about_desc" data-aos="fade-up">
          Hello! I'm a full-stack and front-end web developer with a passion for
          creating awesome digital experiences. I've got a solid grasp of HTML,
          CSS, and JavaScript, along with various frameworks. Check out my
          projects to see my skills in action. I've had the chance to work on
          diverse projects, refining my skills along the way. My portfolio
          reflects my love for clean, user-friendly design. If you're interested
          in collaboration, job opportunities, or just want to connect, feel
          free to reach out.
        </p>
      </div>
    </section>
  );
};

export default About;
