import React from "react";
import { FaFileDownload } from "react-icons/fa";
const About = () => {
  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Get to <b>know</b> about IITH!
          </h1>
          <p>
            <b>Indian Institute of Technology Hyderabad</b> (IIT Hyderabad or
            IITH) is one of the premier institutes of higher education in India.
            Established in 2008, <b>IITH</b> is part of the chain of{" "}
            <b>Indian Institutes of Technology</b>, known for their excellence
            in education, research, and innovation. <br />
            <br />
            <b>IIT Hyderabad</b> offers a variety of undergraduate,
            postgraduate, and doctoral programs in engineering, science, design,
            and liberal arts.It has a strong focus on{" "}
            <b>interdisciplinary</b> research and encourages students to explore
            and work on projects that cross traditional boundaries.
            <br />
            <br />
            The campus is equipped with state-of-the-art facilities, including
            <b>modern classrooms</b>, well-equipped laboratories, advanced research
            centers, and a comprehensive library. The institute also provides
            excellent residential facilities for students, faculty, and staff.
            <br />
            <br />
            <b>IIT Hyderabad</b> has an impressive placement record with <b>top companies</b> from various industries recruiting its graduates. The institute's strong industry connections, combined with its rigorous <b>academic curriculum</b>, ensure that students are well-prepared for the professional world.
            <br />
          </p>
          <a href="../content/Feez.pdf" download className="Fee-btn">
            <button>
              Download Fee Structure <FaFileDownload></FaFileDownload>
            </button>
          </a>
          <a href="../content/Academic_Calendar_Jul-Dec_2024.pdf" download className="Fee-btn">
            <button>
              Download Academic Calendar <FaFileDownload></FaFileDownload>
            </button>
          </a>
        </div>

        
      </div>

     
    </>
  );
};

export default About;
