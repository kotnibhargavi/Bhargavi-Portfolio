import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiFirebase,
  SiBootstrap,
  SiSqlite,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
} from "react-icons/si";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

function Techstack() {
  const techStack = [
    { icon: <SiExpress />, label: "Express.js" },
    { icon: <DiJavascript1 />, label: "JavaScript" },
    { icon: <SiHtml5 />, label: "HTML5" },
    { icon: <DiNodejs />, label: "Node.js" },
    { icon: <DiReact />, label: "React.js" },
    { icon: <SiBootstrap />, label: "Bootstrap" },
    { icon: <DiMongodb />, label: "MongoDB" },
    { icon: <SiCss3 />, label: "CSS3" },
    { icon: <DiGit />, label: "Git" },
    { icon: <SiFirebase />, label: "Firebase" },
    { icon: <SiSqlite />, label: "SQLite" },
    { icon: <DiPython />, label: "Python" },
    { icon: <SiTailwindcss />, label: "Tailwind CSS" },
  ];

  return (
    <>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {techStack.map((tech, index) => (
          <Col
            key={index}
            xs={4}
            md={2}
            className="tech-icons"
            data-tooltip-id="tech-tooltip"
            data-tooltip-content={tech.label}
          >
            {tech.icon}
          </Col>
        ))}
      </Row>

      {/* One shared tooltip */}
      <Tooltip id="tech-tooltip" />
    </>
  );
}

export default Techstack;
