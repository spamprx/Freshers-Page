import React from "react";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectName }) => {
  const desc = {
    GeneralCouncilDesc:
      "The General Council is led by two General Secretaries. One shall be a girl student and another a boy. Mess Secretaries, Transport Heads and Hostel Representatives constitute the rest of the Council. The General council strives towards the general welfare of the students.",
    GeneralCouncilWebsite: "https://gymkhana.iith.ac.in/councils/general/", 

    CulturalCouncilDesc:
      " They attempt to capture the vibrant persona of the students by offering them a platform to showcase their inner musicians, dancers, actors, painters, writers, photographers and dreamers.As a cultural team, they are responsible for keeping the spirits alive on the campus by organizing multitude of cultural activities round the year.",
    CulturalCouncilWebsite: "https://gymkhana.iith.ac.in/councils/cultural/",

    ScitechCouncilDesc:
      "The Sci-Tech council is headed by the Science and Technology Secretary. It encompasses nine societies which covers the diverse nature of science and technology. Various events are organised from time to time, starting from orientation of all these clubs.",
    ScitechCouncilWebsite: "https://gymkhana.iith.ac.in/councils/scitech/",

    SportsCouncilDesc:
      "IITH offers plenty of sports facilities, which include a common football and cricket ground, a hockey ground , a well-equipped swimming pool, floodlit courts for basketball, badminton, tennis, and multiple courts for volleyball.Facilities for indoor games like table tennis, caroms, and chess are also available.",
    SportsCouncilWebsite: "https://gymkhana.iith.ac.in/councils/sports/",
  };

  return (
    <div className="projectBox">
      <h3>{projectName}</h3>
      <p>{desc[projectName + "Desc"]}</p>
      <div className="projectButtons">
        <a href={desc[projectName + "Website"]} target="_blank" rel="noopener noreferrer">
          <button className="projectbtn">
            <CgFileDocument /> Site
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectBox;