import React from "react";
import "../Styles/Projects.css";
import { projects } from "../Data/Projects";
import { FaLink } from "react-icons/fa6";

const Projects = () => {
  return (
    <section id="projects" className="container ">
      <h2>Projects</h2>
      <div className="projects" data-aos="fade-up">
        {projects.map((project) => {
          return (
            <div key={project.id} className="project_content">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className="project_buttons">
                {project?.git && (
                  <a
                    href={project.git}
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github
                  </a>
                )}
                {project?.link && (
                  <a
                    href={project?.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLink className="project_link" />
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
