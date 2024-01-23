import React from "react";
import { SkillsList } from "../Data/SkillsList";
import "../Styles/Skills.css";
const Skills = () => {
  return (
    <section id="skills" className="container">
      <h2>Skills</h2>
      <div className="skills" data-aos="fade-up">
        {SkillsList.map((skill) => {
          return (
            <p key={skill.id} className="each_skill">
              <span className="skill_icon">{skill.icon}</span>
              {skill.name}
            </p>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
