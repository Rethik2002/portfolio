import React, { useEffect } from "react";
import img from "../Assets/image2.jpeg";
import "../Styles/Hero.css";
import { socials } from "../Data/Socials";
import resume from "../Assets/Rethik_resume_01.pdf";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className="container">
      <div className="Hero" data-aos="fade-up">
        <img src={img} alt="hi" id="Hero_img" />
        <h1>Hi, I'm Rethik </h1>
        <h3>FRONT-END WEB DEVELOPER.</h3>
        <p className="hero_desc">
          A passionate Frontend / Fullstack web developer and Ul/UX enthusiast
          specialized in building stunning pixel-perfect interactive
          websites/applications.
        </p>
        <div className="socials">
          {socials.map((social) => {
            return (
              <a
                key={social.id}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </a>
            );
          })}
        </div>
        <a href={resume} download className="btn home_resume">
          Resume
        </a>
        <div className="mouse"></div>
      </div>
    </section>
  );
};

export default Hero;
