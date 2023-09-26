import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceSmileWink,
  faFaceSmileBeam,
} from "@fortawesome/free-regular-svg-icons";
import "./CSS Files/about.css";

function About() {
  const languages = [
    "JavaScript",
    "TypeScript",
    "HTML/CSS",
    "React",
    "NodeJS",
    "MongoDB",
    "Github/Git",
    "Heroku CLI",
    "AWS",
    "WebSockets",
    "Bootstrap CSS",
    "Python",
    "Java",
    "Android / IOS Development",
    "Spring",
    "JQuery",
    "SQL",
  ];

  const learning = ["Assembly", "C++", "C#", ".NET", "Unreal Engine", "Unity"];

  return (
    <section className="about-section" id="About">
      <h1 className="about-title">
        About<span style={{ color: "#FF004F" }}>.</span>
      </h1>
      <div className="section-divider"></div>
      <div className="content-wrapper">
        <div className="about-text">
          <p>
            Currently, I am actively seeking full-stack opportunities that
            encompass both front-end and back-end development. If you're
            interested, I'd be thrilled to connect and discuss potential
            collaborations. I am currently working on several projects that
            emphasize specific tech stacks and frameworks, allowing me to
            further enhance my expertise.
          </p>
          <br />
          <p>
            Feel free to reach out if you would like to explore the potential of
            working together!
          </p>
        </div>
        <div className="right-section">
          <div className="tools">
            <h1>
              <FontAwesomeIcon
                icon={faFaceSmileWink}
                style={{ color: "#ff005a" }}
              />{" "}
              Languages/Frameworks
            </h1>
            {languages.map((language, index) => (
              <span key={index}>{language}</span>
            ))}
            <br />
            <h1>
              <FontAwesomeIcon
                icon={faFaceSmileBeam}
                style={{ color: "#ff005a" }}
              />{" "}
              Learning
            </h1>
            {learning.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
