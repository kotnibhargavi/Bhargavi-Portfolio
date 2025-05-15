import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kotni Bhargavi </span> 
            from <span className="purple"> Visakhapatnam, India.</span>
            <br />
            I’m a Full Stack Developer passionate about creating responsive and user-friendly web applications using the MERN stack
            <br />
            
           
            <br />
            With experience in a professional work environment, I’m currently looking for opportunities to contribute to innovative tech projects.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Developing Full-Stack Web Applications
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Clean, Scalable Code with MERN Stack
            </li>
            <li className="about-activity">
              <ImPointRight /> Continuously Learning New Technologies & Tools
            </li>
            </ul>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">----- Bhargavi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
