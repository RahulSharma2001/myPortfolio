import React from "react";
import projects from "../Data/projects.json";

const Projects = () => {
  return (
    <div className="pcontainer" id="projects">
      <h1>Projects</h1>
      <div className="projects">
        {projects.map((project) => (
          <div className="pitems" key={project.key}>
            <div className="pitem">
              <img src={project.imageSrc} alt="" />
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="pbuttons">
                <a href={project.demo}>
                  <button className="pbtn">Demo</button>
                </a>
                <a href={project.source}>
                  <button className="pbtn">Source Code</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
