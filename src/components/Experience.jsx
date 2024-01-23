import React from "react";
import "../Styles/Experience.css";
import { FaLink } from "react-icons/fa6";
const Experience = () => {
  return (
    <section id="experience" className="container">
      <h2>Experience</h2>
      <div className="each_experience">
        <h3 className="experience_title">
          <a href="https://www.linkedin.com/posts/selvakumaran-rethik-6296821ab_ciscointernship-aicte-futureskills-activity-7143910022245199872-9Q2e?utm_source=share&utm_medium=member_desktop">
            <FaLink />
            ---| Intern | Cisco
          </a>
        </h3>
        <p>
          I successfully completed the Virtual Internship Programme in
          Cybersecurity offered by Cisco in collaboration with AICTE and NASSCOM
          Future Skills Prime. This comprehensive program provided me with
          hands-on experience and in-depth knowledge in the field of
          cybersecurity. I engaged in practical exercises and real-world
          scenarios, gaining insights into threat detection, incident response,
          and implementing security measures to safeguard networks and systems.
          This internship not only enhances my skills in the realm of
          cybersecurity but also demonstrates my commitment to staying at the
          forefront of industry-relevant technologies.
        </p>
        <p></p>
      </div>
    </section>
  );
};

export default Experience;
