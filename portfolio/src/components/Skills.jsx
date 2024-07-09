import React from "react";
import skills from "../Data/skills.json";

const Skills = () => {
  return (
    <div className="container scontainer" id="skills">
      <h1>Skills</h1>
      <div className="skills">
        {skills.map((skill, index) => (
          <div className="items" key={index}>
            <div className="item">
              <img src={`../src/assets/${skill.imageSrc}`} alt="" />
              <h3>{skill.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
