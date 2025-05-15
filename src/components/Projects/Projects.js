import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import QuickStay from "../../Assets/Projects//Images/QuickStay.png";
import Netflix from "../../Assets/Projects//Images/Netflix.png";
import NxtTrendz from "../../Assets/Projects//Images/NxtTrendz.png";
import MernAuth from "../../Assets/Projects//Images/MernAuth.png";
import NxtWatch from "../../Assets/Projects//Images/NxtWatch.png";
import AiCodeReview from "../../Assets/Projects//Images/AiCodeReview.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={QuickStay}
              isBlog={false}
              title="Quick Stay – Hotel Booking App"
              description="A responsive hotel booking platform with role-based access for users, vendors, and admins.
                          Built key pages, protected routes, and dynamic views with Stripe-ready booking flow."
              ghLink="https://github.com/kotnibhargavi/Quick-Stay"
              demoLink="https://quick-stay-roan.vercel.app/"
             techstack= "React.js, Tailwind CSS, React Router, Clerk Auth"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Netflix}
              isBlog={false}
              title="Netflix Clone"
              description="A Netflix-inspired streaming UI with Firebase auth, dynamic movie listings, and trailer player.
                Clean, scrollable sections for trending titles with responsive design."
              ghLink="https://github.com/kotnibhargavi/Netflix-Clone"
              demoLink="https://netflix-clone-two-tawny-69.vercel.app/"
              techstack= "React.js, Firebase, TMDB API, CSS3, Vite"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NxtTrendz}
              isBlog={false}
              title="Nxt Trendz – E-Commerce Clone"
              description="An Amazon-style shopping app featuring cart, product filters, JWT auth, and responsive UI.
                Includes protected routes and seamless session handling."
              ghLink="https://github.com/kotnibhargavi/NxtTrendz-Authentication"
              demoLink="https://bhargavitree.ccbp.tech/"
              techstack= "React.js, JavaScript, CSS3, REST APIs, JWT"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NxtWatch}
              isBlog={false}
              title="Nxt Watch"
              description="Developed the NxtWatch application, a YouTube clone, enabling users to log in, access video categories (Trending, Gaming, Saved videos), search for videos, and view video details."
              ghLink="https://github.com/kotnibhargavi/NxtWatch-App"
              demoLink="https://bhargavinxt.ccbp.tech/"
               techstack= "React JS, JavaScript, Bootstrap, CSS, Routing, REST API Calls, Local Storage, JWT" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MernAuth}
              isBlog={false}
              title="Mern Auth"
              description="A MERN stack app with user signup, login, and email OTP verification,Password reset. Ensures secure authentication and protected access."
              ghLink="https://github.com/kotnibhargavi/MERN-Auth"
               techstack= "React.js, React Router, Node.js, Express.js, MongoDB, JWT, bcrypt, Axios, React Toastify, Nodemailer with Brevo SMTP." 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AiCodeReview}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="AI Code Reviewer is a MERN-stack tool that offers instant AI-powered code reviews using the Google Gemini API. With a clean, interactive UI, users get quick feedback and suggestions to improve their code."
              ghLink="https://github.com/kotnibhargavi/AI-Code-Reviewer"
              demoLink="https://bestaicodereviewer.netlify.app/"     
               techstack= "React, Axios, PrismJS, Markdown, Node.js, Express, Google Gemini API, MongoDB" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
