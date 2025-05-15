import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiJsonwebtokens,
  SiWebpack
} from "react-icons/si";
import {Tooltip} from "react-tooltip";

function Toolstack() {
  return (
  
     <>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons" data-tooltip-id="vs" data-tooltip-content="VS Code">
          <SiVisualstudiocode />
        </Col>
        <Col xs={4} md={2} className="tech-icons" data-tooltip-id="postman" data-tooltip-content="Postman">
          <SiPostman />
        </Col>
        <Col xs={4} md={2} className="tech-icons" data-tooltip-id="slack" data-tooltip-content="Slack">
          <SiSlack />
        </Col>
        <Col xs={4} md={2} className="tech-icons" data-tooltip-id="vercel" data-tooltip-content="Vercel">
          <SiVercel />
        </Col>
        <Col xs={4} md={2} className="tech-icons" data-tooltip-id="jwt" data-tooltip-content="JWT">
          <SiJsonwebtokens />
        </Col>
        <Col xs={4} md={2} className="tech-icons" data-tooltip-id="webpack" data-tooltip-content="Webpack">
          <SiWebpack />
        </Col>
      </Row>

      {/* Tooltip components */}
      <Tooltip id="vs" />
      <Tooltip id="postman" />
      <Tooltip id="slack" />
      <Tooltip id="vercel" />
      <Tooltip id="jwt" />
      <Tooltip id="webpack" />
    </>
  );
}

export default Toolstack;