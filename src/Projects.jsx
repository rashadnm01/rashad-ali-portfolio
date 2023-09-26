import React from "react";
import "./CSS Files/projects.css";

import medical from "./Images/medical.png";
import fault from "./Images/FaultFinder.png";
import calendar from "./Images/Calendar.png";
import tensor from "./Images/TensorFlow.jpg";
import discord from "./Images/DiscordBot.png";
import picture from "./Images/Better.jpg";
import radpoker from "./Images/RadPokerIMG.jpeg";
import wsb from "./Images/wsb.jpeg";
import nadaverse from "./Images/nadaverse.jpeg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function ProjectCard({
  title,
  imageSrc,
  githubLink,
  technologies,
  description,
}) {
  return (
    <div className="project">
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        <img className="images" src={imageSrc} alt={title} />
      </a>
      <div className="project-info">
        <div className="project-title">
          <h2>{title}</h2>
          <div className="liness"></div>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
        <h3>
          <span style={{ color: "#FF004F" }}>{technologies}</span>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div id="Projects">
      <h1 className="title">
        My Projects <span style={{ color: "#FF004F" }}>.</span>{" "}
      </h1>
      <div className="projects-wrapper">
        <ProjectCard
          title="RadPoker"
          imageSrc={radpoker}
          githubLink="https://radpoker.com"
          technologies="React, NodeJs, WebSockets, Scala, AWS, MongoDB"
          description="A Texas Hold'em Online Poker Application where you have a chance to play and win real money."
        />

        <ProjectCard
          title="Wall Street Blast"
          imageSrc={wsb}
          githubLink="https://wallstreetblast.com"
          technologies="React, NodeJs, WebSockets, Heroku, PostgresQL"
          description="A crash casino type gambling game with a built-in admin panel for making and tracking cash transactions."
        />

        <ProjectCard
          title="NADAVerse"
          imageSrc={nadaverse}
          githubLink="https://nadaverse.com"
          technologies="Swift, React, MongoDB"
          description="Online dating application."
        />
      </div>
    </div>
  );
}

export default Projects;
