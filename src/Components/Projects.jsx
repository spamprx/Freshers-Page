import React from "react";
import ProjectBox from "./ProjectBox";

const Projects = () => {
  return (
    <div>
      <h1 className="projectHeading">
        <b>Councils</b> in IITH
      </h1>
      <div className="project">
        <ProjectBox projectName="GeneralCouncil" />
        <ProjectBox projectName="CulturalCouncil" />
        <ProjectBox projectName="ScitechCouncil" />
        <ProjectBox projectName="SportsCouncil" />
      </div>
    </div>
  );
};

export default Projects;